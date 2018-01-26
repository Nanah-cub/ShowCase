package com.github.play.website.p1.service

import java.io.{File, FileOutputStream}
import javax.inject.{Inject, Singleton}

import com.github.play.website.p1.doa.retrieveSkillDOA
import com.github.play.website.p1.objects._
import org.apache.poi.xssf.usermodel.{XSSFRow, XSSFWorkbook}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import slick.jdbc.JdbcProfile

import scala.concurrent.duration.Duration
import scala.concurrent.{Await, ExecutionContext}
import scala.util.{Failure, Success}

trait SkillSet {
  def retrieveSkillSets(category: Option[String]): ResponseObject
  def generateFile(response: RespRetrieveSkills): Option[File]
}


@Singleton
class SkillSetService @Inject()(protected val dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext)
  extends HasDatabaseConfigProvider[JdbcProfile] with SkillSet {

  override def retrieveSkillSets(category: Option[String]): ResponseObject = {
    val database = dbConfigProvider.get[JdbcProfile].db
    val skillDOA = new retrieveSkillDOA(database)
    val results = skillDOA.retrieveSkills(category)
    Await.ready(results, Duration.Inf)
    val result = results.value match {
      case Some(Success(obj)) => {
        RespRetrieveSkills(0, transformResponse(obj))
      }
      case None => {
        RespRetrieveSkills(1, null)
      }
      case Some(Failure(y)) => {
        RespRetrieveSkills(9999, null)
      }
    }
    result
  }
  override def generateFile(response: RespRetrieveSkills): Option[File] = {

    val file = new File("mydata.xlsx")
    val fileOut = new FileOutputStream(file);
    var rowNum = 0;


    val wb = new XSSFWorkbook
    val sheet = wb.createSheet("Skills")
    response.data.foreach(x=>{
      var row = sheet.createRow(rowNum)
      rowNum+=1
      setRow(row, x)
    })
    wb.write(fileOut);
    fileOut.close();
    Option(file)
  }

  private def setRow(row: XSSFRow, skill: SkillVO): Unit = {
    row.createCell(0).setCellValue(skill.skills)
    row.createCell(1).setCellValue(skill.category)
    row.createCell(2).setCellValue(skill.skillDesc)
  }

  /**
    * Transforms the response
    *
    * @param seq
    * @return
    */
  def transformResponse(seq: Seq[(SkillEnt, (Option[CourseMpEnt], Option[CourseEnt]))]): Seq[SkillVO] = {
    val skillMap: Map[SkillEnt, Seq[CourseResults]] = seq.groupBy(x => x._1).map(x => (x._1, x._2.map(_._2)))
    type CourseResults = (Option[CourseMpEnt], Option[CourseEnt])

    /**
      * Creates skills based
      *
      * @param skillTuple
      * @return
      */
    def createSkills(skillTuple: (SkillEnt, Seq[CourseResults])): SkillVO = {
      val (skillEnt, courseLst) = skillTuple
      val id = skillEnt.id
      val skill = skillEnt.skill
      val description = skillEnt.description
      val level = skillEnt.level
      val visInd = skillEnt.visibleDescInd
      val skillDesc = skillEnt.visibleDescInd
      val category = skillEnt.category
      val coursLt = createCourses(courseLst)
      SkillVO(id, skill, description, level, visInd,  category, Some(coursLt))
    }
//case class SkillVO(id: Int, skills: String, skillDesc: String, level: Int, visInd: Char, category: String, courses: Option[Seq[CourseVO]])

    def createCourses(courseLst: Seq[CourseResults]): Seq[CourseVO] = {
      courseLst.map(x => {
        val courseDescr = x._2
        courseDescr.map(courseEnt => CourseVO(Some(courseEnt.id), courseEnt.courseNm, courseEnt.courseDescr,
          courseEnt.courseProvider.getOrElse("NONE"))
        )
      }).flatten
    }
    val x = skillMap.toList.map(x => createSkills(x))
    x

  }
}



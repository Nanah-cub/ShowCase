package com.github.play.website.p1.objects


import java.util.Date

import slick.jdbc.PostgresProfile.api._

trait SkillRepo {


 case class SkillTableDef(tag: Tag) extends Table[SkillEnt](tag, "skills") {

    def id = column[Int]("id", O.PrimaryKey)

    def user = column[String]("web_user")

    def skill = column[String]("skill")

    def skillDesc = column[String]("description")

    def level=column[Int]("level")

    def visibleDescInd= column[Char]("visible_desc")

    def category = column[String]("catagory")

    def * = (this.id, this.user, skill, skillDesc, level, visibleDescInd, category) <> (SkillEnt.tupled, SkillEnt.unapply)
  }

  case class CourseTableDef(tag: Tag) extends Table[CourseEnt](tag, "courses") {
    def id = column[Int]("id", O.PrimaryKey)
    def courseNm= column[String]("course_nm")
    def courseDescr= column[String]("course_desc")
    def courseProv= column[Option[String]]("course_provider")
    def * = (this.id, this.courseNm, this.courseDescr, this.courseProv) <> (CourseEnt.tupled, CourseEnt.unapply)
  }
//case class CourseMpEnt(id: Int, skillId: Int, courseId: Int, grade: Option[Int], startDt: Option[Date], endDt: Option[Date] )

//case class CourseMpEnt(id: Int, skillId: Int, courseId: Int, grade: Option[String], startDt: Option[Date], endDt: Option[Date] )


  case class CourseMapTableDef(tag: Tag) extends Table[CourseMpEnt](tag, "skill_crs_map"){
    def id= column[Int]("id", O.PrimaryKey)
    def skillId=column[Int]("skill_id")
    def courseId=column[Int]("course_id")
    def grade=column[Option[String]]("grade")


    def * = (this.id, this.skillId, this.courseId, this.grade) <> (CourseMpEnt.tupled, CourseMpEnt.unapply)
  }
}
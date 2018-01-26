package com.github.play.website.p1.doa

import com.github.play.website.p1.objects._
import slick.jdbc.PostgresProfile.api._

import scala.concurrent.Future

class retrieveSkillDOA(val database: Database) extends SkillRepo{

  lazy val skills = TableQuery[SkillTableDef]
  lazy val courses= TableQuery[CourseTableDef]
  lazy val courseMp=TableQuery[CourseMapTableDef]



  def retrieveSkills(category: Option[String]): Future[Seq[(SkillEnt,(Option[CourseMpEnt], Option[CourseEnt]))]] = {
    val innerJoin = for {
      ((skills, maps), courses) <- skills joinLeft  courseMp on (_.id === _.skillId) joinLeft courses on (_._2.map(_.courseId) === _.id)
    } yield (skills, (maps, courses))
    val filter = category match {
      case Some(category)=> innerJoin.filter(x=>x._1.category===category)
      case None => innerJoin
    }

    database.run(filter.result);
  }
}

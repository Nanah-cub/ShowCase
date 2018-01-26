package com.github.play.website.controllers

import java.io.File
import javax.inject._

import com.github.play.website.p1.objects.{RespRetrieveSkills, ResponseObject}
import com.github.play.website.p1.service.SkillSet
import play.api.mvc._
import play.api.db.slick.DatabaseConfigProvider
import org.json4s.DefaultFormats
import org.json4s.jackson.Serialization.write
import scala.concurrent._
import ExecutionContext.Implicits.global

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(protected val dbConfigProvider: DatabaseConfigProvider,
                                cc: ControllerComponents, skillSet: SkillSet) extends AbstractController(cc) {

  implicit val formats = DefaultFormats
  /**
    *
    * @return homepage
    */
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  /**
    * Skillset
    * @param fromYr year aquired
    * @param toYr
    * @return skillsets
    */
  def getSkillSet(category: Option[String])= Action {
    val resp: ResponseObject = skillSet.retrieveSkillSets(category)
    resp match {
      case RespRetrieveSkills(0, obj) => Status(200)(write(obj))
      case RespRetrieveSkills(_, _) => Status(488)("Strange response type")
    }
  }

  def exportSkills(category: Option[String]) = Action {
    val resp: ResponseObject = skillSet.retrieveSkillSets(category);
    resp match {
      case RespRetrieveSkills(0, obj) =>
        {
          val file: Option[File] = skillSet.generateFile(RespRetrieveSkills(0,obj))
          Ok.sendFile(file.get)
        }
      case RespRetrieveSkills(_, _) => Status(488)("Strange response type")
    }


  }





}

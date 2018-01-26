package com.github.play.website.p1.objects

case class CourseVO(id: Option[Int], courseName: String, courseDescription: String, courseProvider: String)
case class SkillVO(id: Int, skills: String, skillDesc: String, level: Int, visInd: Char, category: String, courses: Option[Seq[CourseVO]])


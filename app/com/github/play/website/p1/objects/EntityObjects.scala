package com.github.play.website.p1.objects

import java.util.Date


case class SkillEnt(id: Int, user: String, skill: String, description: String, level: Int, visibleDescInd: Char, category: String)
case class CourseMpEnt(id: Int, skillId: Int, courseId: Int, grade: Option[String])
case class CourseEnt(id: Int, courseNm: String, courseDescr: String, courseProvider: Option[String])

package com.github.play.website.p1.objects

sealed trait ResponseObject
case class RespRetrieveSkills(errorCode: Int, data: Seq[SkillVO]) extends ResponseObject

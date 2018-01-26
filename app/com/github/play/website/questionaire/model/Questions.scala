package com.github.play.website.questionaire.model

sealed class Question

case class TrueOrFalse(id: Integer, question: String, answer: Option[Boolean]) extends Question

case class MultipleChoiceOne(id: Integer, question: String, choices: List[String], answer: Option[String]) extends Question

case class MultipleChoiceMany(id: Integer, question: String, choices: List[String], answers: Option[List[String]]) extends Question

case class FillInBlank(id: Integer, question: String, answer: Option[String]) extends Question



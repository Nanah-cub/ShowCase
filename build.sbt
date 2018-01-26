name := """Play Website"""
organization := "com.josh.app"

version := "1.0-SNAPSHOT"


lazy val root = (project in file(".")).enablePlugins(PlayScala).disablePlugins(PlayFilters)


scalaVersion := "2.12.2"


libraryDependencies ++= Seq(guice,
 "com.typesafe.slick" % "slick_2.12" % "3.2.1",
 "org.slf4j" % "slf4j-nop" % "1.6.4",
 "org.postgresql" % "postgresql" % "9.4.1212",
 "com.typesafe.play" %% "play-slick" % "3.0.1",
 "com.typesafe.play" %% "play-slick-evolutions" % "3.0.1",
 "org.json4s" % "json4s-jackson_2.12" % "3.5.3",
 "org.apache.poi" % "poi" % "3.17",
 "org.apache.poi" % "poi-ooxml" % "3.17"
)
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.0" % Test


// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.josh.app.controllers._"

// Adds additional packages into conf/routes
 play.sbt.routes.RoutesKeys.routesImport += "bindings._"


herokuAppName in Compile := "scalawebsite"






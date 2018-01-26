package bindings

import com.github.play.website.p1.service.{SkillSet, SkillSetService}
import com.github.play.website.p1.service.SkillSetService
import com.google.inject.AbstractModule
import com.github.play.website.p1.service._

class Module extends AbstractModule {
  def configure() = {

    bind(classOf[SkillSet])
      .to(classOf[SkillSetService]).asEagerSingleton()



  }
}
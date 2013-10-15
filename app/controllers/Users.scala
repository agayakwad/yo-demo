package controllers

import play.api.mvc._
import models._
import play.api.libs.json._
import collection.mutable.MutableList

object Users extends Controller {

  println("User object fired !")
  val users = MutableList(
    User(Some(1), "Biswa@hirepro.com", "Biswa", "M"),
    User(Some(2), "anil.ag@hirepro.com", "Anil", "S"),
    User(Some(3), "syed.j@hirepro.com", "Syed", "J")
  )

  def index() = Action { implicit request =>
    Ok(Json.toJson(users))
  }

  def edit(id: Long) = Action { implicit request =>
    users.find(_.id == Some(id)).map { user =>
      Ok(Json.toJson(user))
    } getOrElse {
      NotFound(s"No User with id: $id")
    }
  }

  def save(id: Long) = Action(parse.json) { implicit request =>
   request.body.validate[User].fold(
      invalid = e => BadRequest(JsError.toFlatJson(e)),
      valid = { user =>
        users.find(_.id == Some(id)).map { storedUser =>
          // Update user with same id
          users.update(users.indexOf(storedUser), user)
          Ok(Json.toJson(user))

        } getOrElse {

          // Insert new user
          val lastId = users.maxBy(_.id).id.get
          val userWithNewId = user.copy(id = Some(lastId + 1))
          users += userWithNewId
          Created(Json.toJson(userWithNewId))
        }
      }
    )
  }

  def remove(id: Long) = Action { implicit request =>
    Ok("Working")
  }

}

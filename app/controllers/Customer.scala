package controllers

import play.api.mvc._
import models._
import play.api.libs.json._
import collection.mutable.MutableList

object Customers extends Controller {
  
 def test(id: Long) = Action { implicit request => 
      Ok("")     
  }

}
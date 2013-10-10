import sbt._
import Keys._
import play.Project._
import com.tuplejump.sbt.yeoman.Yeoman
import java.net._
import scala.Some

object ApplicationBuild extends Build {

  val appName         = "yo-demo"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    jdbc,
    anorm
  )


 val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here 
    Yeoman.yeomanSettings : _*     
  ) 
 /* object Keys {
    val uiDirectory = SettingKey[File]("ui-directory")
  }
  
  import Keys._

  val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here 
    Yeoman.yeomanSettings : _*,
    // Turn off play's internal less compiler
    lessEntryPoints := Nil,
    // Turn off play's internal javascript compiler
    javascriptEntryPoints := Nil,
    // Add the views to the dist
    playAssetsDirectories <+= (baseDirectory in Compile)(base => base / "ui" / "app" / "views"),

    // Where does the UI live?
    uiDirectory <<= (baseDirectory in Compile) { _ / "ui" },

    // Start grunt on play run
    playOnStarted <+= uiDirectory { base =>
      (address: InetSocketAddress) => {
        Grunt.process = Some(Process("grunt run", base).run)
      }: Unit
    },

    // Stop grunt when play run stops
    playOnStopped += {
      () => {
        Grunt.process.map(p => p.destroy())
        Grunt.process = None
      }: Unit
    },

    // Allow all the specified commands below to be run within sbt
    commands <++= uiDirectory { base =>
      Seq(
        "grunt",
        "bower",
        "yo",
        "npm"
      ).map(cmd(_, base))
    }
  )

  private def cmd(name: String, base: File): Command = {
    Command.args(name, "<" + name + "-command>") { (state, args) =>
      Process(name :: args.toList, base) !;
      state
    }
  }*/

}

object Grunt {
  var process: Option[Process] = None
}
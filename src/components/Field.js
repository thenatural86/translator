import React from "react"
// import of context object
import LanguageContext from "../contexts/LanguageContext"

class Field extends React.Component {
  // links component to the context object (LanguageContext)
  // static keyword ads a property to the class itself
  static contextType = LanguageContext

  render() {
    // this references the language property on the context object.
    // ternary logic, if language equals english, print name otherwise print "naam"
    const text = this.context.language === "english" ? "Name" : "Naam"

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field

import React from "react"
// import context object from LanguageContext
import LanguageContext from "../contexts/LanguageContext"

class LanguageSelector extends React.Component {
  // links component to the context object (LanguageContext)
  // static keyword ads a property to the class itself (this.context)
  static contextType = LanguageContext

  render() {
    // this.context = state object and onLanguageChange from language store
    return (
      <div>
        Select a language
        <i
          className="flag us"
          // callback function located on the context property
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    )
  }
}

export default LanguageSelector

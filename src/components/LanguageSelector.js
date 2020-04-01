import React from "react"
import LanguageContext from "../contexts/LanguageContext"

class LanguageSelector extends React.Component {
  // links component to the context object (LanguageContext)
  // static keyword ads a property to the class itself
  static contextType = LanguageContext

  render() {
    // console.log(this.context)
    return (
      <div>
        Select a language
        <i
          className="flag us"
          //
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

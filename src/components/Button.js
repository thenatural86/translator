import React from "react"
// import of language context object
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"

class Button extends React.Component {
  renderSubmit = language => {
    return language === "english" ? "Submit" : "Voorleggen"
  }

  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    // console.log(this.context)
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button

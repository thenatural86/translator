import React from "react"
// import of language context object
import LanguageContext from "../contexts/LanguageContext"
// color context object
import ColorContext from "../contexts/ColorContext"

// Do not need a context type when using a Consumer
class Button extends React.Component {
  // helper method that compares the value of the language property
  renderSubmit = language => {
    return language === "english" ? "Submit" : "Voorleggen"
  }

  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        {/* Call the Consumer component on the language context object  */}
        <LanguageContext.Consumer>
          {/* provide one child passed into consumer, which is q function. */}
          {/* gets called with the current value inside of context object */}
          {/* invokes the renderSubmit callback function */}
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    // console.log(this.context)
    // access the value of the color context object via .Consumer
    // function passed in that returns renderButton helper method
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button

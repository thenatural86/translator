import React from "react"

// creation of a react context object with a default value of ste string 'english' and then assigned to the Context variable
// can use any type of valid JS value: object, array, string, ect.
const Context = React.createContext("english")

// contains all business logic related to currently selected language as well as a Provider to share that data with its children. Single source of truth.
export class LanguageStore extends React.Component {
  state = { language: "english" }

  // onLanguageChange callback function goes inside of the context object and is available to language selector to change the language
  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context

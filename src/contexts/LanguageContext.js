import React from "react"

// creation of a react context object with a default value of ste string 'english' and then assigned to the Context variable
// can use any type of valid JS value: object, array, string, ect.
const Context = React.createContext("english")

export class LanguageStore extends React.Component {
  state = { language: "english" }

  // callback to change language
  // language passed in as arg, set state with that new language value
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

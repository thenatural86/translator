import React from "react"
// creation of a react context object with a default value of ste string 'english' and then assigned to the Context variable
// can use any type of valid JS value: object, array, string, ect.
const Context = React.createContext("english")
// contains all business logic related to currently selected language as well as a Provider to share that data with its children. Single source of truth.
// export named LanguageStore class
export class LanguageStore extends React.Component {
  // maintain the currently selected language
  state = { language: "english" }
  // onLanguageChange callback function goes inside of the context object and is available to language selector to change the currently selected language
  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      // how we share the current data and the ability to change it with other component inside of our application
      <Context.Provider
        // value is all of the data(...this.state) and the ability to change that data(onLanguageChange)
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {/* all of the components wrapped by the Provider have access to the Context implemented by this Provider */}
        {/* All the components rendered by the LanguageStore Context show up on props.children */}
        {this.props.children}
      </Context.Provider>
    )
  }
}
// default export of Context
export default Context

import React from "react"
import UserCreate from "./UserCreate"
import { LanguageStore } from "../contexts/LanguageContext"
// color context object
import ColorContext from "../contexts/ColorContext"
import LanguageSelector from "./LanguageSelector"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        {/* All components wrapped in language store to give them access to LanguageStore context object and methods */}
        <LanguageStore>
          {/* language selector component that renders the flags and their functionality */}
          <LanguageSelector />
          {/* value prop is special for Provider. The value is what we want to take from App component and put into context object */}
          {/*makes data available to the button component that get rendered inside UserCreate  */}
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App

import React from "react"
import UserCreate from "./UserCreate"
import { LanguageStore } from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"
import LanguageSelector from "./LanguageSelector"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          {/* value prop is special for Provider. The value is what we want to take from App component and put into context object */}
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App

import './ButtonToggle.css'
import React, {useContext} from "react"
import ThemeContextProvider, {ThemeContext} from '../../Context/ThemeContext'

export default function ButtonToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext) 

    return(
        <button onClick={toggleTheme} className="btnToggle">{theme ? "🌝 LIGHT" : "🌚 NIGHT"}</button>
    )
}
import React, {useContext} from "react"
import ButtonToggle from '../ButtonToggle/ButtonToggle'
import './Content.css'
import { useState } from 'react'
import ThemeContextProvider, {ThemeContext} from '../../Context/ThemeContext'

export default function Content() {

    const {theme} =  useContext(ThemeContext)
    console.log(theme);
    
    return (
        <div className="containerContent">
            <ButtonToggle />

            <h1>blabla</h1>
            <p className="texte-context">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aut aspernatur, quisquam adipisci, ducimus tempora quam assumenda ratione dolore cupiditate optio! Incidunt facere quia debitis totam similique officiis, nulla consequuntur sunt repellat porro labore iste est officia odit nesciunt pariatur dolore illo harum cum vero iusto. Rerum debitis fugit, laboriosam quo libero corrupti nostrum cupiditate neque asperiores iure maxime eaque alias id magni distinctio, architecto cumque quibusdam porro, eum repellendus repudiandae quos suscipit iste! Voluptates doloremque soluta et labore. Ducimus et laboriosam nulla sapiente eaque, ut cupiditate magnam corrupti consequuntur maxime eveniet perspiciatis nemo. Consequuntur obcaecati, sint accusamus omnis dolor, soluta eius ratione quibusdam incidunt aut rem. Maiores possimus quisquam iure eius. Tenetur repellendus ex doloribus aspernatur voluptas perferendis sapiente, dolorum dignissimos necessitatibus veniam, exercitationem alias sed delectus assumenda culpa nihil praesentium repellat commodi hic? Recusandae dicta fuga, soluta eaque unde incidunt distinctio mollitia vero dolorum sequi! Dignissimos consequuntur atque error. Eius minima repellat illo accusamus? Non sequi voluptatem deleniti ut blanditiis expedita, fugiat explicabo fuga soluta aut nemo voluptatum illo illum sit error cupiditate cumque eum quibusdam saepe, sed vero, alias aliquam odio. Illo iusto, necessitatibus et consectetur dicta nihil cum veniam eveniet totam possimus quis voluptatum quidem debitis.</p>
        </div>
    )

}

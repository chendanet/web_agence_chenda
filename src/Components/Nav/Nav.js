import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav() {
        return (
            <ul className="navbarweb">
                <Link exact to="/">
                    <li>Home</li>
                </Link>

                <Link exact to="/Work">
                    <li>Work</li>
                </Link>

                <Link exact to="/About">
                    <li>About</li>
                </Link>
            </ul>
        )

}
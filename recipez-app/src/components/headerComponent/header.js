/**
 * Title: header.js
 * Author: Andrew Sanchez
 * Date Created: 11/2/2017
 * Description: This file will contain the Navigation Bar, Logo, and
 * other header(e) things.
 */
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="Logo">
                    <img src="https://68.media.tumblr.com/avatar_acbfaaa90b06_128.png" alt="Logo" />
                </div>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/Search">Search/Browse</Link>
                        </li>

                        <li>
                            <Link to="/Cookbook">Cookbook</Link>
                        </li>

                        <li>
                            <Link to="/Kitchen">Kitchen</Link>
                        </li>

                        <li className="last">
                            <Link to="/Planner">Planner</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
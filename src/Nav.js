import './Nav.css'
import React from 'react';
import { useState } from 'react';
import OpenMain from './OpenMain';

function Nav(){
    const [isShow, setIsShow] = useState(false);

    return(
        <nav className="Nav">
            <span onClick={() => setIsShow(true)}>Main</span>
            {isShow && (
                    <OpenMain />
                )}
            <a href="About.js">About us</a>
            <a href="Products.js">Product</a>
        </nav>
    );
}
export default Nav;
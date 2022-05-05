import './Products.css'
import React from 'react';
import { useState } from 'react';
import react from './img/react.png';
import vue from './img/vue.png';
import angular from './img/angular.png';
import sass from './img/sass.png';
import node from './img/node.png';
import js from './img/js.png';
import modal from './img/modal.jpg'

function Products() {
    const [isShow, setIsShow] = useState(false);

    return (
        <section className="Products">
            <h3>Products</h3>
            <div class="products 1">
                <div class="product" onClick={() => setIsShow(true)}>
                    <img alt="" src={react} />
                    <p class="name">React</p>
                </div>
                {isShow && (
                    <div class='modal'>
                        <h1>Modal window</h1>
                        <button type='button' onClick={() => setIsShow(false)}>Close</button>
                        <img alt="" src={modal} class="modal-img"/>
                    </div>
                )}
                <div class="product">
                    <img alt="" src={vue} />
                    <p class="name">Vue</p>
                </div>
                <div class="product">
                    <img alt="" src={angular} />
                    <p class="name">Angular</p>
                </div>

            </div>
            <div class="products 2">
                <div class="product">
                    <img alt="" src={sass} />
                    <p class="name">Sass</p>
                </div>
                <div class="product">
                    <img alt="" src={node} />
                    <p class="name">Node</p>
                </div>
                <div class="product">
                    <img alt="" src={js} />
                    <p class="name">JS</p>
                </div>
            </div>
        </section>
    );
}
export default Products;
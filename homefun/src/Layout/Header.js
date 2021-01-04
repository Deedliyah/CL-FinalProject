/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header id="header">
                <div class="container d-flex">

                    <div class="logo mr-auto">
                        <h1 class="text-light"><a href="index.html"><span>Flexor</span></a></h1>

                    </div>

                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li class="drop-down"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="drop-down"><a href="#">Drop Down 2</a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li><a href="#">Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>
                    </nav>

                </div>
            </header>)

    }
}

export default Header  
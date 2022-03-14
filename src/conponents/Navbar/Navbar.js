import React from "react";
import { Link } from "react-router-dom";
import Icon from '../../image/6.svg';
import Icontwo from '../../image/5.svg';
import './nav.scss';
/* import styled from 'styled-components'; */

const Navbar = () => {
    return (
        <div className="my-2">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid container">
                    <img src={Icon} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-nav text-purple" aria-current="page" href="#" to="/">Главная</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-nav" aria-current="page" href="#" to="/branches">Филиалы</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-nav" aria-current="page" href="#" to="/about">О нас</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-nav" aria-current="page" href="#" to="/contact">Контакты</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Link to="korzinka">
                                <button class="btn nav-btn2" type="submit"><img src={Icontwo} />Корзина</button>
                            </Link>
                            <button class="btn nav-btn" type="submit">Войти</button>
                            <Link to="/admin">
                                <button class="btn nav-btn" type="submit" >Админ</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

/* const Section = styled.div`
.text-purple{
    color: purple;
}
` */

export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";
import './footer.scss';

const Footer = () => {
    return (
        <div class="bg-footer">

            <footer class="text-center text-white">

                <div class="container">

                    <section class="mt-5">

                        <div class="row text-center d-flex justify-content-center pt-5">

                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <Link href="#!" class="text-white" to="/">Главная</Link>
                                </h6>
                            </div>

                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <Link href="#!" class="text-white" to="/branches">Филиалы</Link>
                                </h6>
                            </div>

                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <Link href="#!" class="text-white" to="/about">О нас</Link>
                                </h6>
                            </div>

                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <Link href="#!" class="text-white" to="/contact">Контакты</Link>
                                </h6>
                            </div>

                        </div>

                    </section>

                    <hr class="my-5" />

                    <section class="mb-5">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-8">
                                <p>
                                    Пользовательское соглашение
                                </p>
                            </div>
                        </div>
                    </section>

                    <section class="text-center">
                        <a href="" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-github"></i>
                        </a>
                    </section>

                </div>

            </footer>
        </div>
    );
};

export default Footer;

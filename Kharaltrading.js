import React, { Component } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import br1 from './1br.jpg';
import js10 from './10js.jpg';
import br2 from './2br.jpg';
import br3 from './3br.jpg';
import br4 from './4br.jpg';
import br5 from './5br.jpg';
import br6 from './6br.jpg';
import br7 from './7br.jpg';
import br8 from './8br.jpg';
import br9 from './9br.jpg';
import br10 from './10br.jpg';
import br11 from './11br.jpg';
import br12 from './12br.jpg';
import br13 from './13br.jpg';

export default function KharaltradingPage() {
    return (
        <div>

            <head>

                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />

                <title>Best Rice Trading Site!</title>
            </head>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Kharal Trading Rice</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-red text-uppercase  " href="#" style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }}><NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>Home <span class="sr-only">(current)</span></NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-red text-uppercase  " href="#" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'none' }}><NavLink to="/About/" style={{ textDecoration: 'none', color: 'white', fontSize: 18 }}>About </NavLink></a>
                        </li>
                        <li className="nav-item dropdown" style={{ color: 'red', fontWeight: 'bold' }}>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: 18 }}>
                                Qualties of Paddy
                          </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" style={{ fontSize: 16 }}>Kainaat 1121</a>
                                <a class="dropdown-item" href="#" style={{ fontSize: 16 }}>1509</a>
                                <a class="dropdown-item" href="#" style={{ fontSize: 16 }}>Super Chenab</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" style={{ fontSize: 16 }}>386</a>
                                <a class="dropdown-item" href="#" style={{ fontSize: 16 }}>Super 515</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true" style={{ color: 'green', fontWeight: 'bold' }}><NavLink to="/Contact/" style={{ textDecoration: 'none', color: 'white', fontSize: 18 }}>BUY FROM US</NavLink></a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="left-section" style={{ fontSize: 16 }}>
                            <h1>Facts</h1>
                            <p>There are more than 39,000 different rice varieties world over. Most of the world’s rice is
                            consumed in the area in which it is grown. Only around 6% is traded internationally.
                            However, about 10% are grown commercially. Asian farmers produce about 90% of the total.
                            World rice production in 2007 was approximately 645 million tonnes with over 114 countries
                            growing rice.</p>
                            <p>Nearly half the world’s 7.4 billion population eat rice as part of their staple diet and
                            demand is expected to grow by 50 per cent by 2030. The average person in some parts of Asia
                            eats 40-60kg each year.</p>
                            <p>
                                <h4>BASMATI FACTS:</h4> The name basmati means sweet smell. This rice has special
                        features, which make it’s naturally long grain fragrant and delicious in taste.</p>
                            <p>Basmati is considered as the “prince of fragrance” or “the perfumed one” due to its unique
                            aroma and delicately nutty taste. Basmati has been revered for centuries, including by
                            Moghul Emperors. People in Europe, America and the Middle East (in particular Saudi Arabia
                            and Iran), are consuming more Basmati than ever before. Demand for Basmati in Europe is
                            increasing. Many British consumers use it as a vital cooking ingredient. It is the dominant
                            rice product in the UK, accounting for nearly half of the rice consumed.</p>
                            <p>
                                <h4>PAKISTANI RICE:</h4> Pakistan is the producer of the world’s finest long grain
                        aromatic basmati rice.</p>
                            <p>Basmati, the king of rice, is held in the highest regard world over. Among all the other
                            varieties of rice, none have the distinctive long grains or the subtle aroma for which this
                            grain is considered so special. This also justifies the premium this rice commands against
                            all other rice of the world.</p>
                            <p>It takes birth in the most fertile valleys and plains of Pakistan. It is harvested by hand
                            with delicate care, aged to perfection and then processed. The result is an extra long,
                            pearly white, delicate grain with an irresistible aroma and delectable taste bringing alive
                            an age of nawabs and emperors, glittering courts and legendary chefs.</p>
                            <p>The legend says that basmati rice was meant to be consumed by maharajas (kings), maharanis
                            (queens), princes and royal families. This unique rice is just one crop a year grown only in
                            Pakistan and northern India, the region known as old Punjab – the land of five rivers
                            originating from Himalayas.</p>
                            <h4>Kinds of Rice</h4>
                            <p>On the basis of aroma or fragrance we can divide the rice into two major Kinds.</p>
                            <ol class="one-half-list">
                                <li><b>Basmati Rice</b></li>
                                <li><b>Non Basmati Rice</b></li>
                            </ol>
                            <h4>Main Types of Basamti Rice</h4>
                            <p>In basmati rice, there are many rice varieties are introduced in the market from time to time
                            but the following are main exportable basmati varieties of Pakistan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container my-4" style={{ fontSize: 16 }}>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img" width="350" height="300" src={br1} alt="" />
                            <div class="card-body">
                                <p class="card-text">
                                    <h1>Super Basmati White Rice </h1>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img" width="350" height="300" src={br2} alt="" />
                            <div class="card-body">
                                <p class="card-text">
                                    <h1> 1121 Basmati Rice </h1>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img" width="350" height="300" src={br3} alt="" />
                            <div class="card-body">
                                <p class="card-text">
                                    <h1> Basmati Sindh Rice</h1>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="container my-4 " style={{ fontSize: 16 }}>
                <h4>Main Types of Non Basamti Rice</h4>
                <p>In non-basmati rice, there are many rice varieties are introduced in the market from time to time but
                    the following are main exportable non-basmati varieties of Pakistan.</p>
            </div>

            <div class="container my-4">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img" width="350" height="300" src={br4} alt="" />
                            <div class="card-body">
                                <p class="card-text">
                                    <h1>Kainat White Rice </h1>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img" width="350" height="300" src={br5} alt="" />
                            <div class="card-body">
                                <p class="card-text">
                                    <h1> IRRI-9 Long Grain Rice </h1>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img class="bd-placeholder-img" width="350" height="300" src={br6} alt="" />
                            <div class="card-body">
                                <p class="card-text">
                                    <h1>IRRI 6 Rice Sindh</h1>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container my-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="bd-placeholder-img" width="350" height="300" src={br7} alt="" />
                                <div class="card-body">
                                    <p class="card-text">
                                        <h1>IRRI-9 C-9 Long Grain Rice </h1>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="bd-placeholder-img" width="350" height="300" src={br8} alt="" />
                                <div class="card-body">
                                    <p class="card-text">
                                        <h1> KS-282 Long Grain Rice </h1>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="bd-placeholder-img" width="350" height="300" src={br9} alt="" />
                                <div class="card-body">
                                    <p class="card-text">
                                        <h1> Broken Rice (Totta)</h1>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                <div class="left-section" style={{ fontSize: 16 }}>
                        <h4>Forms of Rice</h4>
                        <p>Each rice has converted into four forms as per it’s demand and requirements. From the paddy,
                            you can prepare the below form of rice.</p>
                    </div>
                </div>
                <br />
                <div class="container my-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="bd-placeholder-img" width="325" height="300" src={br10} alt="" />
                                <div class="card-body">
                                    <p class="card-text">
                                        <h1>Brown Rice From Punjab </h1>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="bd-placeholder-img" width="325" height="300" src={br11} alt="" />
                                <div class="card-body">
                                    <p class="card-text">
                                        <h1> Parboiled Rice From Punjab </h1>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="bd-placeholder-img" width="325" height="300" src={br12} alt="" />
                                <div class="card-body">
                                    <p class="card-text">
                                        <h1> Steam Rice From Punjab</h1>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img class="bd-placeholder-img" width="325" height="300" src={br13} alt="" />
                                    <div class="card-body">
                                        <p class="card-text">
                                            <h1>White Rice From Punjab </h1>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
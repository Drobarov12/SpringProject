import React from "react";

import LeftHeader from "../Headers/LeftHeader/leftHeader"
import Service1 from "../../images/celServis.PNG"
import Service2 from "../../images/celServis2.PNG"
import Service3 from "../../images/prednaStrana.jpg"
import Map from "../../images/map.PNG"

const home = () => {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <LeftHeader/>
                <main className={"col-md-9 ml-sm-auto col-lg-10 px-4"}>
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="col">Услуги</h2>
                        </div>
                        <div className="row gx-100 my-5">
                            <div className="col">
                                <div>
                                    <h3 className="text-center">BMW СЕРВИС</h3>
                                    <p className="text-center align-self-center">
                                        Сервисниот центар е комплетно опремен со специјален алат,
                                        опрема и професионалци со долгогодишно искуство во сервисирањето
                                        во кој се гарантира одржување и сервисирање на возилата BMW.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <img src={Service1} alt={"Service1"}/>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col">
                                <img src={Service2} alt={"Service2"}/>
                            </div>
                            <div className="col">
                                <h3 className="text-center">BMW КЛИМА СЕРВИС</h3>
                                <p className="text-center align-self-center">
                                    Во сервисниот центар Кикофих можете да направите детална и целосна проверка на
                                    системот за
                                    климатизација, да добиете сервисен извештај од нашите инженери и комплетен сервис –
                                    дополнување на
                                    фреон,
                                    или поправка на системот.
                                </p>
                            </div>


                        </div>
                        <div className="row my-5 ">
                            <div className="col-6">
                                <h3 className="text-center">BMW ДЕЛОВИ</h3>
                                <p className="text-center align-self-center">
                                    Кикофих ви нуди широк асортиман на резервни делови со оригинален квалитет за вашето
                                    BMW.
                                    За врвни перформанси на вашето возило BMW, резервните делови се набавени директно од
                                    производителот
                                    – BMW.
                                </p>
                            </div>
                            <div className="col-6">
                                <img src={Service3} alt={"Service3"} className={"w-100 h-100"}/>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col">
                                <img src={Map} alt={"Map"} className={"w-100 h-100"}/>
                            </div>
                            <div className="col">
                                <h4 className="text-center">Нешто повеке за нас</h4>
                                <p className="text-center align-self-center">
                                    Сервисниот центар Зетов, нуди високо квалитетна услуга и професионалниот, одржување
                                    и врвен
                                    сервис
                                    на сите
                                    возила од марката BMW во Македонија. Во сервисниот центар се користат оригинални
                                    резервни
                                    делови и
                                    потрошен материјал со одлични цени и 12 месечна гаранција на истите.
                                </p>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}

export default home;
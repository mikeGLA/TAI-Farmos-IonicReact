import "./System.css";
import backButton from "../images/Button Back.png";
import { Link } from "react-router-dom";
import pulse from "../images/systempulse.png";
import fodderSys from "../images/FodderPlant.png"
import aquaSys from "../images/Aquaphonic.png"
import phoneCall from "../images/phone-call 1.png"
import vegFarm from "../images/Vegetablefarm.png"
import { IonApp, IonContent } from "@ionic/react";


const System = () => {
    return (
        <IonApp>
            <IonContent>
                <div className="System-header">
                    {/* Making back button that lead user back to dashboard */}

                    <div className="BackButton">
                        <Link to="/dashboard"><img src={backButton} width="44" height="44"/></Link>
                    </div>
                    {/* Making header title and image also showing device location using api divide section with flexbox */}

                    <div className="SystemStatus-FlexContainer">
                        <div className="SystemStatus-Title">
                            <p>System Status</p>
                        </div>

                        <div className="SystemStatus-Image">
                            <img src={pulse} width="60" height="60"/>
                        </div>
                    </div>

                    <div className="SystemStatus-Location">Sansai, Chiang Mai, Thailand</div>
                </div>
                    {/* Start Making Body Part */}
                <div className="System-body">
                    <div className="System-body-title">
                        <p>System List</p>
                    </div>
                    {/* Making system Card Fodder Aqua and Plant */}

                    {/* Making FodderPlantation Card */}
                    <div className="System-body-FodderPlantation">
                        <div className="System-FodderPlantation">
                            <div className="FodderPlantation-Image">
                                <img src={fodderSys} width="145" height="135"/>
                            </div>
                        </div>
                        <div className="FodderPlantation-Status">
                            <div className="FodderPlantation-Status-Title">Fodder Plantation</div>
                            <div className="FodderPlantation-Status-Message">System Status: <span>OK</span></div>
                        </div>
                    </div>
                    {/* Making Aquaphonic Card */}
                    <div className="System-body-Aquaphonic">
                        <div className="System-Aquaphonic">
                            <img className="Aquaphonic-Image" src={aquaSys} width="150" height="135"/>
                        </div>
                        <div className="Aquaphonic-Status">
                            <div className="Aquaphonic-Status-Title">Aquaphonic</div>
                            <div className="Aquaphonic-Status-Message">System status: <span>Pump Fail</span></div>
                            {/* Making system failure message and call support */}
                            <div className="System-Failure">
                                <img className="System-Failure-Image" src={phoneCall} width="30px" height="30px"/>
                                <div className="System-Failure-TelSupport">Contact Stuff</div>
                            </div>
                        </div>
                    </div>
                    {/* Making Vegtable farm card */}
                    <div className="System-body-VegetableFarm">
                        <div className="System-VegetableFarm">
                            <img className="VegetableFarm-Image" src={vegFarm} width="150" height="135"/>
                        </div>
                        <div className="VegetableFarm-Status">
                            <div className="VegetableFarm-Status-Title">Vegetables</div>
                            <div className="VegetableFarm-Status-Message">System status: <span>OK</span></div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonApp>

    );
}


export default System;
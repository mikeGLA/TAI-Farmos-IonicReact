import "./Consumption.css"
import  BackButton from "../images/Button Back.png"
import WaterLightning from "../images/waterLightning.png"
import ThunderIcon from "../images/thunder-2 2.png"
import WaterDrop from "../images/waterdropblue.png"
import {useState, useEffect} from 'react';
import LineChart from "./LineChart/LineChart";
import { Link } from "react-router-dom";
import { IonApp, IonContent } from "@ionic/react"


const Consumption = () => {

    const [dayColor, setdayColor] = useState("Date-Day-Active");

    const [monthColor, setmonthColor] = useState("Date-Month");

    const [yearColor, setyearColor] = useState("Date-Year");

    return (
        <IonApp>
            <IonContent>
                <div className="Consumption-header">
                    <div className="Consumption-BackButton">
                        <Link to="/dashboard"><img src={BackButton} width="44" height="44"/></Link>
                    </div>
                    <div className="FlexResource-Icon">
                        <div>
                            <div className="Consumption-ResourceConsumption">
                                <p>Resource Consumption</p>
                            </div>
                            <div className="Consumption-Location">
                                <p>Sansai, Chiang Mai, Thailand</p>
                            </div>
                        </div>
                        <div className="Resource-Icon">
                            <div className="Icon-Round">
                                <img className="WaterDrop-Edit" src={WaterLightning} width="35" height="40"/>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="Consumption-body">
                    <div className="Consumption-Date">
                    <span className="Consumption-Date-Day"><button className={dayColor} onClick={()=> {setdayColor("Date-Day-Active"); setmonthColor("Date-Month"); setyearColor("Date-Year")}}>
                    Day</button>
                    </span>
                    <span className="Consumption-Date-Month"><button className={monthColor} onClick={()=> {setmonthColor("Date-Month-Active"); setdayColor("Date-Day"); setyearColor("Date-Year")}}>
                    Month</button>
                    </span>
                    <span className="Consumption-Date-Year"><button className={yearColor} onClick={()=> {setyearColor("Date-Year-Active"); setdayColor("Date-Day"); setmonthColor("Date-Month")}}>
                    Year</button>
                    </span>
                </div>

                    <div className="Consumption-Cost">
                        <div className="Consumption-WaterPrice">
                            <div className="WaterPrice-HalfCircle">
                                <div className="WaterPrice-Text">
                                    <span className="Price">14</span>
                                    <span className="Unit">THB</span>
                                    <span className="WaterPrice-Image"> <img src={WaterDrop} width="28" height="38"/></span>
                                    <span className="WaterPrice-Label">Water Price</span>
                                </div>
                            </div> 
                        </div>

                        <div className="Consumption-ElectricPrice">
                            <div className="ElectricPrice-HalfCircle">
                                <div className="ElectricPrice-Text">
                                    <span className="Price">34</span>
                                    <span className="Unit">THB</span>
                                    <span className="ElectricPrice-Image"><img src={ThunderIcon} width="30px" height="32px"/></span><br/>
                                    <div className="ElectricPrice-Label">Electricity <div>Price</div></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="Consumption-Resource-Graph">
                        <LineChart/>
                    </div>

                </div>
            </IonContent>
        </IonApp>
    );
}


export default Consumption;
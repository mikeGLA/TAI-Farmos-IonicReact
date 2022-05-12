import "./CardMenu.css";
import FodderImage from "../../../images/unsplash_yovhXPl8V1M.png"
import Sun from "../../../images/sun.png"
import Humid from "../../../images/Vector.png"
import WindPic from "../../../images/Vector (2).png"
import RainPic from "../../../images/cloud-drizzle.png"

const CardMenuAll = () => {
    
    return(
        <>
            <div className="SmallPanel-FodderBox">
                <div className="SmallPanel-FodderBox-control">
                    <div className="container-img">
                        <img className="FodderImage-Edit" src={FodderImage} width="350px" height="180px"/>  
                    </div>

                    <div className="FodderBox-PlantCount">
                        <p>800 Plants</p>
                    </div>

                    <div className="FodderBox-TypeName">
                        <p>Fodder Plantation</p>
                    </div>

                    <div className="FodderBox-Location">
                        <p>Sansai, Chiang Mai, Thailand</p>
                    </div>

                    <div className="FodderBox-Monitor">
                        <div className="FodderBox-LightDark">
                            <img className="LightDark-SunEdit" src={Sun}/>
                        </div>
                        <div className="FodderBox-Status">
                            <div className="FodderBox-Temp">
                                <p>+22 &#x2103;</p>
                            </div>
                            <div className="FodderBox-HumidWind">
                                <span className="humid">
                                    <img src={Humid} width="14px" height="18"/>
                                    <span>20%</span>
                                </span>
                                <span className="wind">
                                    <img src={WindPic} width="14px" height="18"/>
                                    <span>5 m/s</span>
                                </span>
                                <span className="rainning">
                                <img src={RainPic} width="14px" height="18"/>
                                    <span>0 mm</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="FodderBox-Action">
                        <p>Planned Activity : <span style={{color:"#DC257D"}}>Water Spraying</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardMenuAll; 

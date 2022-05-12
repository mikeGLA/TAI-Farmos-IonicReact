import "./CardMenu.css";
import FodderImage from "../../../images/tobacco-curing.jpeg"
import Sun from "../../../images/sun.png"
import Humid from "../../../images/Vector.png"
import WindPic from "../../../images/Vector (2).png"
import RainPic from "../../../images/cloud-drizzle.png"

const CardMenuTobacco = () => {
    
    return(
        <>
            <div className="SmallPanel-TobaccoBox">
                <div className="SmallPanel-TobaccoBox-control">
                    <div className="container-img">
                        <img className="TobaccoImage-Edit" src={FodderImage} width="330px" height="180px"/>  
                    </div>

                    <div className="TobaccoBox-PlantCount">
                        <p>800 Plants</p>
                    </div>

                    <div className="TobaccoBox-TypeName">
                        <p>Tobacco Curing Facility</p>
                    </div>

                    <div className="TobaccoBox-Location">
                        <p>Sansai, Chiang Mai, Thailand</p>
                    </div>

                    <div className="TobaccoBox-Monitor">
                        <div className="TobaccoBox-LightDark">
                            <img className="LightDark-SunEdit" src={Sun}/>
                        </div>
                        <div className="TobaccoBox-Status">
                            <div className="TobaccoBox-Temp">
                                <p>+22 &#x2103;</p>
                            </div>
                            <div className="TobaccoBox-HumidWind">
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
                    <div className="TobaccoBox-Action">
                        <p>Planned Activity : <span style={{color:"#DC257D"}}>Water Spraying</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardMenuTobacco; 

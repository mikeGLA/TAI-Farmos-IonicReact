import moment from 'moment';
import "./Dashboard.css";
import notificationDash from "../images/Vector (1).png";
import taidash from "../images/TAI Logo@2x.png";
import DashboardBody from "./DashboardBody/DashboardBody";


// import lib module // 
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import settingAPI from '../settingAPI';
import { IonContent, IonApp } from '@ionic/react';

const Dashborad = () => {
    const isSettingAPI = settingAPI();
    // let navigate = new useNavigate();
    // set cookies //
    const [cookies,removeCookie]:any = useCookies(['taiagroTokenSet']);
    const [isListMachine, setIsListMachine] = useState([]);

    // set is Error // 
    const [isError, setIsError] = useState(false);    

    const payload = {
        email:cookies.keyEmail,
        isPage: "dashborad"
    }

    const headerConfig = {
        headers:{
            'Content-Type': 'application/json',
            'access-token': cookies.taiIsToken
        }
    }

    useEffect(  () => {

        const fetchMachine = async () => {
            console.log("dashboard here")
            
            try{
                // production host:  https://taifarm.co //
                const listMachine = await axios.post(`${isSettingAPI}/backend/getmachinetoggle`,payload, headerConfig);
                // console.log("listMachine ===> ",listMachine)
                if(listMachine.data.isError === false){
                    // setIsListMachine correct as array // 
                    setIsListMachine(listMachine.data.text);
                    
                }else{
                    removeCookie("keyEmail");
                    removeCookie("taiIsToken"); 
                    // navigate("../loginpage")               
                }
            }catch(err){
                removeCookie("keyEmail");
                removeCookie("taiIsToken");
                // navigate("../loginpage")
            }
        }
        fetchMachine();
        
    },[])
    // debug here show data in list machine // 
    console.log(isListMachine);

 
    const timeNow = moment().format("MM/DD/YYYY");
    return (
 
        <IonApp>
            <IonContent>
                {isError === false && 
                    <>
                    <div className="Dashborad-header">
                            <div className="header-grid-bar-title">
                                <div className="set-date-container">
                                    <div className="greeting-container">
                                        <p>Good Morning</p>
                                    </div>
                                    <div className="date-container">
                                        <p>{timeNow}</p>
                                    </div>
                                </div>
                                <div className='notic-container'>
                                    <div className='notic-icon-1'>
                                        <img className="ringBell" src={notificationDash} height="26px" width="30px" />
                                    </div>
                                    <div className='notic-icon-2'>
                                        <img className="taiLogo" src={taidash} height="30px" width="30px" />
                                    </div>
                                </div>
                            </div>


                            <div className='Weather-box'>
                                <div className="Weather-Text">
                                    <p>Weather</p>
                                </div>

                                <div className="Weather-Box-TempReport">
                                    <div className="Weather-TempCurrent">
                                        <div className="TempNow">24&#x2103;</div>
                                        <div className="SkyLook">Partly Cloudy</div>
                                    </div>
                                    <div className="Weather-TempHighLow">
                                        <span>
                                            <div className="Weather-TempLow">
                                                <div className="TempLow-Text">
                                                    <p>Low Temp</p>
                                                </div>

                                                <div className="TempLow-Num">
                                                    <p>14&#x2103;</p>
                                                </div>
                                            </div>
                                        </span>
                                        <span>
                                            <div className="Weather-TempHigh">
                                                <div className="TempHigh-Text">
                                                    <p>High Temp</p>
                                                </div>

                                                <div className="TempHigh-Num">
                                                    <p>34&#x2103;</p>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="Dashborad-body">
                            {
                                isListMachine.map((element, index) => {
                                    return<DashboardBody eachMachineProfile={element} />
                                })
                            }
                        </div>
                    </>
                }

                {/* {
                    isError !== false && <Navigate
                        to="/errorpage"
                        replace={true}
                    />
                } */}
            </IonContent>
        </IonApp>
    );
}

export default Dashborad;
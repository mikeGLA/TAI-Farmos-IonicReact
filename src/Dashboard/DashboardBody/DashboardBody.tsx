import "./DashboardBody.css";
import TobaccoMenu from "./CardMenu/CardMenuTobacco"
import FodderMenu from  "./CardMenu/CardMenuFodder"
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { IonContent, IonApp } from "@ionic/react";

const DashboardBody = (eachMachineProfile:any) =>{
   
    // console.log("child sent ===> ",eachMachineProfile);
    const machineid = eachMachineProfile.eachMachineProfile.machineId
    // console.log("machineid ==> ",machineid)
    const [changeMachineType, setChangeMachineType] = useState("all-plant");
    const [allTextColor, setallTextColor] = useState("machineButtonAll-Active");
    const [fodderTextColor, setfodderTextColor] = useState("machineButtonFodder");
    const [tobaccoTextColor, settobaccoTextColor] = useState("machineButtonTobacco");

    return(
        <IonApp>
          <IonContent>
            <Link to={`/plantdetail/${machineid}`}>
            <div className="myPlantDash">
                    <div className="myPlant-Plantation">
                        <p>My Plantation</p>
                    </div>
                    <div className="myPlant-ProductChoice">
                        <span className="ProductChoice-all-plant">
                            <button className={allTextColor} onClick={() => {setChangeMachineType("all-plant"); setallTextColor("machineButtonAll-Active"); setfodderTextColor("machineButtonFodder"); settobaccoTextColor("machineButtonTobacco")}}>
                                All Plant
                            </button> 
                        </span> 
                        <span className="ProductChoice-Fodder">
                            <button className={fodderTextColor} onClick={() => {setChangeMachineType("Fodder"); setallTextColor("machineButtonAll"); setfodderTextColor("machineButtonFodder-Active"); settobaccoTextColor("machineButtonTobacco")}}>
                                Fodder
                            </button>    
                        </span> 
                        <span className="ProductChoice-Tobacco">
                            <button className={tobaccoTextColor} onClick={() => {setChangeMachineType("Tobacco"); setallTextColor("machineButtonAll"); setfodderTextColor("machineButtonFodder"); settobaccoTextColor("machineButtonTobacco-Active")}}>
                                Tobacco
                            </button>
                        </span>
                    </div>
                </div>
                {
                    changeMachineType === "all-plant" && <TobaccoMenu/>
                }
                {
                    changeMachineType === "Fodder" && <FodderMenu/>
                }
                {
                    changeMachineType === "Tobacco"  && <TobaccoMenu/>
                }
            </Link>
          </IonContent>
        </IonApp>

    );
}

export default DashboardBody;
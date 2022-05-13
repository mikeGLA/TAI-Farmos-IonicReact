import {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios'
// import Modal from 'react-modal'; เปลี่ยนไปใช้ IonModal
import { IonContent, IonApp, IonModal } from '@ionic/react';

import "./PlantDetail.css";
import BackButton from "../images/Button Back.png";
import LeafIcon from "../images/LeafIcon.png";
import HumidityImage from "../images/humidity 1.png";
import TempImage from "../images/thermometer 1.png";
import PlantAgeImage from "../images/carbon_soil-moisture-field.png";
import WaterIcon from "../images/Vector.png";
import MoonIcon from "../images/MoonIcon.png";
import Fan from "../images/fan 1.png";
import ThreeLeaf from "../images/3Leaf.png";
import AiChip from "../images/chip-2 1.png";

import settingAPI from '../settingAPI';


const PlantDetail = () => {
    const isSettingAPI = settingAPI();
    const {machineid}:any = useParams();
    // console.log("machineid ===>", machineid)

    // let navigate = new useNavigate();
    const [cookies, removeCookie]:any = useCookies(['taiagroTokenSet']); 
    
    // dump data toggle api //
    const [isMacgineList, setIsMachineList]:any = useState([]); 

    // setting data toggle //
    const [isMachineId, isSetMachineId]:any = useState("");
    const [isMachineType, setIsMachineType] = useState("");
    const [isTemp, setIsTemp] = useState("");
    const [isHumid, setIshumid] = useState("");
    const [isWind ,setIsWind] = useState("");
    const [isToggleWater, setIsToggleWater]:any = useState();
    const [isToggleLight, setIsToggleLight]:any = useState();
    const [isToggleFan, setIsToggleFan]:any = useState();
    const [isToggleFer, setIsToggleFer]:any = useState();
    const [isToggleAuto, setIsToggleAuto]:any = useState();

    // setting css toggle //
    const [waterToggle, setWaterToggle] = useState("Water-Control");
    const [lightToggle, setLightToggle] = useState("Lighting-Control");
    const [fanToggle, setFanToggle] = useState("RoomFan-Control");
    const [fertilizerToggle, setFertilizerToggle] = useState("Fertilizer-Control")
    const [automateToggle, setAutomateToggle] = useState("System-Automatic")
 

    //  checking error //
    const [isConnectionFail, setIsConnectionFail] = useState(null);
 
    


    useEffect(() => {

        const gettingMachine = async (selectPage:any) => {
            const payload = {
                email:cookies.keyEmail,
                isPage: selectPage,
                machineId:machineid
            }
        
            const headerConfig = {
                headers:{
                    'Content-Type': 'application/json',
                    'access-token': cookies.taiIsToken
                }
            }
            try{
                const machineLists = await axios.post(`${isSettingAPI}/backend/getmachinetoggle`,payload, headerConfig);
                console.log("machineLists.data===>",machineLists.data)
                if(machineLists.data.isError === false){
                    setIsMachineList(machineLists.data.listData);
 
                    console.log("machine data ===> ",machineLists);
                    console.log("machine data water ===> ",machineLists.data.listData.toggleWater);

                    isSetMachineId(machineLists.data.listData.machineId);
                    setIsMachineType(machineLists.data.listData.machineType);
                    setIsTemp(machineLists.data.listData.temperature);
                    setIshumid(machineLists.data.listData.humid);
                    setIsWind(machineLists.data.listData.wind);
                    setIsToggleWater(machineLists.data.listData.toggleWater);
                    setIsToggleLight(machineLists.data.listData.toggleLight);
                    setIsToggleFan(machineLists.data.listData.toggleFan);
                    setIsToggleFer(machineLists.data.listData.toggleFeitizer);
                    setIsToggleAuto(machineLists.data.listData.toggleAuto);
 
                }else if(machineLists.data.loginStatus === false){
                    removeCookie("keyEmail");
                    removeCookie("taiIsToken");
                    // navigate("../loginpage");    
                }else if(machineLists.data.isError === true){
                    setIsConnectionFail(machineLists.data.text);
                }
            }catch(err){
                removeCookie("keyEmail");
                removeCookie("taiIsToken");
                // navigate("../loginpage");
            }
        }

        if(machineid !== "myfirstlog"){
            // console.log("have machine!")
            gettingMachine("plantControl");
        }else{
            console.log("FirstLog!")
            gettingMachine("fromFooter");
        }
    },[])


    const buttonWater = () => {
        console.log("now in function water")
        if(isToggleWater === false){
            setWaterToggle("Water-Control-Active")
            setIsToggleWater(true)
        }else{
            setWaterToggle("Water-Control")
            setIsToggleWater(false)
        }
        
    }

    const buttonLight = () => {
        if(isToggleLight === false){
            setLightToggle("Lighting-Control-Active")
            setIsToggleLight(true)
        }else{
            setLightToggle("Lighting-Control")
            setIsToggleLight(false)
        }
    }

    // RoomFan-Control-active
    const buttonFan = () => {
        if(isToggleFan ===false){
            setFanToggle("RoomFan-Control-active")
            setIsToggleFan(true)
        }
        else{
            setFanToggle("RoomFan-Control")
            setIsToggleFan(false)
        }
    }

    const buttonFertilizer = () =>{
        if(isToggleFer === false){
            setFertilizerToggle("Fertilizer-Control-Active")
            setIsToggleFer(true)
        }else{
            setFertilizerToggle("Fertilizer-Control")
            setIsToggleFer(false)
        }

    }

    const buttonAutomate = () =>{
        if(isToggleAuto === false){
            setAutomateToggle("System-Automatic-Active")
            setIsToggleAuto(true)
        }else{
            setAutomateToggle("System-Automatic")
            setIsToggleAuto(false)
        }
    }

    useEffect(() => {
        buttonWater();
        buttonLight();
        buttonFan();
        buttonFertilizer();
        buttonAutomate();
        console.log("effect ==> ",waterToggle)
    },[])
    

    return (
        <IonApp>
            <IonContent>
                <div className="PlantDetail-header">
                    <div className="PlantDetail-BackButton">
                        <Link to="/dashboard"><img src={BackButton} width="44" height="44"/></Link>
                    </div>
                    <div className="HeaderPlant-Text">
                        <div className="PlantDetail-PlantCount">
                            <div className="ProductCount">800 Plants</div>
                            <div className="ProductName">Fodder Plantation</div>
                            <div className="ProductLocation">Sansai, Chiang Mai, Thailand</div>
                        </div>
                        <div>
                            <img className="LeafIcon" src={LeafIcon} width="60" height="60"/>
                        </div>
                    </div>
                    {/* build div to contain 3 grid and use css to decorate all 3 div inside */}
                    {/* Can we considerate delete all text classname inside since it no longer use and now it also look good? */}
                    <div className="PlantDetail-Monitor">
                        <div className="Monitor-Humidity">
                            <div>
                                <img className="" src={HumidityImage} height="26" width="26"/>
                            </div>
                            <div className="Humidity-Text">
                                <p>Humidity</p>
                            </div>
                            <div className="Humidity-Var">
                                <p>20 %</p>
                            </div>
                        </div>
                        <div>
                            <div className="Temp-Image">
                                <img className="" src={TempImage} height="26" width="26"/>
                            </div>
                            <div className="Temp-Text">
                                <p>Temperature</p>
                            </div>
                            <div className="Temp-Var">
                                <p>22&#x2103;</p>
                            </div>

                        </div>
                        <div>
                            <div className="PlantAge-Image">
                                <img className="" src={PlantAgeImage} height="26" width="26"/>
                            </div>
                            <div className="PlantAge-Text">
                                <p>Temperature</p>
                            </div>
                            <div className="PlantAge-Var">
                                <p>7 Days</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* --------------------body part-------------------- */}
    
                <div className="PlantDetail-body">
                    {/* ---Row 1 Water and Lighting Control--- */}
                    {
                        isMacgineList.length === 0 && <IonModal className="loader"  isOpen={false}></IonModal>
                    }
                    
                    <div className="PlantDetail-WaterLighting">
                        <div className={waterToggle} >
                            <div className="WaterIcon-Button">
                                <div className="Water-Icon">
                                    <img className="Water-Drop" src={WaterIcon} width="20" height="23"/>
                                </div>
                                {/* ----SwitchButtonBelow---- */}
                                <div className="Water-Control-Button">
                                    <label className="Water-Control-Switch">
                                        {
                                            isToggleWater === false && <input type="checkbox" onChange={buttonWater}  />
                                        }
                                        {   
                                            isToggleWater === true && <input type="checkbox" onChange={buttonWater}  checked/>
                                        }
                                        <span className="Water-Swtich-Slider" />
                                    </label>
                                </div>
                                {/* ----SwitchButton---- */}
                            </div>
                            <div className="WaterSpray-Label">Water Spray</div>
                            <div className="WaterSpray-CountDown">2h 30min</div>
                        </div>
                        {/* -----Lightning Card start----- */}
                        <div className={lightToggle}>
                            <div className="LightingIcon-Button">
                                <div className="MoonIcon-Background">
                                    <img className="MoonIcon" src={MoonIcon} width="20" height="23"/>
                                </div>
                                {/* ----SwitchButtonBelow---- */}
                                <div className="Lighting-Control-Button">
                                    <label className="Lighting-Control-Switch">
                                        {/* สร้าง state เก็บค่า toggle */}
                                        {
                                            isToggleLight === false && <input type="checkbox" onChange={buttonLight} />
                                        }
                                        {
                                            isToggleLight === true && <input type="checkbox" onChange={buttonLight} checked/>
                                        }
                                        <span className="Lighting-Swtich-Slider" />
                                    </label>
                                </div>
                                {/* ----SwitchButton---- */}
                            </div>
                            <div className="Lighting-Label">Lighting</div>
                            <div className="Lighting-CountDown">8h 30min</div>
                        </div>
                    </div>

                    {/* ---Row Number 2 For Room Fan and Fertilizer Spray--- */}

                    <div className="PlantDetail-WaterLighting">
                        <div className={fanToggle}>
                            <div className="RoomFanIcon-Button">
                                <div className="FanIcon-Background">
                                    <img className="FanIcon" src={Fan} width="20" height="23"/>
                                </div>
                                {/* ----SwitchButtonBelow---- */}
                                <div className="RoomFan-Control-Button">
                                    <label className="RoomFan-Control-Switch">
                                        {
                                            isToggleFan === false && <input type="checkbox" onChange={buttonFan}/>
                                        }
                                        {
                                            isToggleFan === true && <input type="checkbox" onChange={buttonFan} checked/>
                                        }
                                        <span className="RoomFan-Swtich-Slider" />
                                    </label>
                                </div>
                                {/* ----SwitchButton---- */}
                            </div>
                            <div className="RoomFan-Label">Room Fan</div>
                            <div className="RoomFan-CountDown">5h 30min</div>
                        </div>
                        <div className={fertilizerToggle}>
                            <div className="FertilizerIcon-Button">
                                    <div className="Fertilizer-BackGround">
                                        <img className="FertilizerIcon" src={ThreeLeaf} width="25" height="25"/>
                                    </div>
                                    {/* ----SwitchButtonBelow---- */}
                                    <div className="Fertilizer-Control-Button">
                                        <label className="Fertilizer-Control-Switch">
                                            {
                                                isToggleFer === false && <input type="checkbox" onChange={buttonFertilizer}/>
                                            }
                                            {
                                                isToggleFer === true && <input type="checkbox" onChange={buttonFertilizer} checked/>
                                            }  
                                            <span className="Fertilizer-Swtich-Slider" />
                                        </label>
                                    </div>
                                    {/* ----SwitchButton---- */}
                                </div>
                                <div className="Fertilizer-Label">Fertilizer Sprayer</div>
                                <div className="Fertilizer-CountDown">1h 30min</div>
                        </div>
                    </div>

                    <div className={automateToggle}>
                        <div className="Automate-Image">
                            <div className="Automate-Background">
                                <img className="Automate-Chip-Image" src={AiChip} width="65"/>
                            </div>
                        </div>
                        <div className="Automate-Label-Timer">
                            <div className="Automate-Label">Automatic Mode</div>
                            <div className="Automate-Timer">1h 30min</div>
                        </div>
                        <div className="Automate-Switch">
                            <div className="Automate-Button-Control">
                                <label className="Automate-Control-Switch">
                                    {
                                        isToggleAuto === false && <input type="checkbox" onChange={buttonAutomate}/>
                                    }
                                    {
                                        isToggleAuto === true && <input type="checkbox" onChange={buttonAutomate} checked/>
                                    }  
                                    
                                    <span className="Automate-Control-Slider"/>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonApp>
    );
}


export default PlantDetail;
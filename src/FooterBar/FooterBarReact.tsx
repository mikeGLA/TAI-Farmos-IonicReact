import {Link} from 'react-router-dom';
 
import "./FooterBar.css";
import Leaf from "../images/leaf.png";
import Droplet from "../images/Vector.png";
import HomeButton from "../images/home.png";
import HeartBeat from "../images/activity.png";
import Gear from "../images/gear.png";
import { IonApp, IonContent } from '@ionic/react';

 


const FooterBar =  () => {

    const isMachineId = "myfirstlog"
 
 
    return (
        <IonApp>
            <IonContent>
                <div className="FooterBar-contianer">
                    <div className="menu-btn">
                        <div className="set-menu">
                            <Link to={`/plantdetail/${isMachineId}`}>
                                <img src={Leaf} width="20px" height="20px" />
                            </Link>
                        </div>
                    </div>
                    <div className="menu-btn">
                        <div className="set-menu">
                            <Link to="/consumption">
                                <img src={Droplet} width="20px" height="20px"/>
                            </Link>
                        </div>
                    </div>
                    <div className="menu-btn-home">
                        <div className="set-menu-home">
                            <Link to="/dashboard">
                                <img src={HomeButton} width="20px" height="20px"/>
                            </Link>
                        </div>
                    </div>
                    <div className="menu-btn">
                        <div className="set-menu">
                            <Link to="/system">
                                <img src={HeartBeat} width="20px" height="20px"/>
                            </Link>
                        </div>
                    </div>
                    <div className="menu-btn">
                        <div className="set-menu">
                            <Link to="/loginpage">
                                <img src={Gear} width="20px" height="20px"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonApp>
    );
}


export default FooterBar;
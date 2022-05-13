import "./LoginPage.css"
import tailogo from "../images/TAI Logo@2x.png"
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import Modal from 'react-modal';
import { IonApp, IonModal, IonContent } from "@ionic/react";


import settingAPI  from "../settingAPI";

import axios from "axios";
// const axiosTest = axios.create({baseURL:"http://farmos-backend:3030", proxy:true});
// window.location.reload(false);
const LoginPage = () => {
 
    const isSettingAPI = settingAPI()
    
    const [isEmail, checkEmail]:any = useState();
    const [password, checkPassword]:any = useState();
    const [isError, checkIsError]:any = useState("");
    const [isLoading, setIsLoading]:any = useState(false)

    // set cookie // 
    const [cookies, setCookie]:any = useCookies(['taiagroTokenSet']);

    // let navigate = new useNavigate()

    const onHaddleLogin = async () => { 
        console.log("login clicked!")
        setIsLoading(true)
        const isLogin = await axios.post(`${isSettingAPI}/backend/login`,{
            email: isEmail,
            password: password
        })
        console.log(isLogin.data);
        
        if(isLogin.data.isError === true){
            checkIsError(isLogin.data.text);
        }else{
            setCookie('keyEmail', isLogin.data.text.keyEmail);
            setCookie('taiIsToken', isLogin.data.text.token);
            console.log("navigate to dashboard");
            const path = ("../dashboard");
            // navigate(path);
        }
    }

    const checkingAuth = async () => {
        const payload = {
            email:cookies.keyEmail
        }
    
        const headerConfig = {
            headers:{
                'Content-Type': 'application/json',
                'access-token': cookies.taiIsToken
            }
        }
   
        const authStatus = await axios.post(`${isSettingAPI}/backend/checker`,payload ,headerConfig);
        const authStatusDepart = authStatus.data.isError
        
        return authStatusDepart
    }

    const isCheckingAuth =  checkingAuth();
    isCheckingAuth.then(isStatus => {
        if(isStatus === false){
            const path = "../profile";
            // navigate(path);
        }else{
            console.log(isStatus)
        }
    } )


 
        return(
            <IonApp>
                <IonContent>
                    <div className="loginPage-All">
                        <IonModal className="loader" isOpen={isLoading}></IonModal>
                        <div className="loginPage-TaiLogo">
                            <img className="Tailogo" src={tailogo} height="50px" width="50px"/>
                        </div>
        
                        <div className="loginPage-Username">
                            <div>
                                <label>Enter your Email.
                                    <div className="UsernameBox">
                                        <input 
                                            type="text" 
                                            value={isEmail} 
                                            onChange={(e)=>checkEmail(e.target.value)}
                                            placeholder="username" required/>
                                    </div>
                                </label>
                            </div>
        
                            <div className="Password-label">
                                <label>Enter your Password.
                                        <div className="PasswordBox">
                                            <input 
                                                type="password" 
                                                value={password} 
                                                onChange={(e)=>checkPassword(e.target.value)}
                                                placeholder="password" required/>
                                        </div>
                                </label>
                                <div>
                                    {isError !== "" && <h6 style={{color: "red"}}>{isError}</h6>}
                            
                                </div>
                                <div className="SubmitBox">
                                    <button className="loginbut" onClick={onHaddleLogin}>Login</button>
                                    <Link to="/registerpage"><button>Register</button></Link>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
                </IonContent>
            </IonApp>
    
    
    
        );
 


    
}

export default LoginPage;

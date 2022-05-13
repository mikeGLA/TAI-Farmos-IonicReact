import axios  from "axios";
import "./UpdateProfile.css"
import { useState, useEffect } from "react";
// import {useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import tailogo from "../images/TAI Logo@2x.png"


import settingAPI from "../settingAPI";
import { IonApp, IonContent } from "@ionic/react";


const UpdateProfile = () => {

    const isSettingAPI = settingAPI();
    
    const [cookies]:any = useCookies(['taiagroTokenSet']);
    
    // get cookies // 
    const getToken:any = cookies.taiIsToken;
    const getEmail:any = cookies.keyEmail; 

    // set old profile before update // 
    const [isEmail, setIsEmail ]:any = useState();
    const [isFirstName, setIsFirstName]:any = useState();
    const [isLastName, setIsLastName]:any = useState();
    const [isAddress, setIsAddress]:any = useState();
    const [isPostCode, setIsPostCode]:any = useState();
    const [isPhone, setIsPhone]:any = useState();
    const [ispassword, setIspassword]:any = useState();
    const [isComfirmPassword, setUsComfirmPassword]:any = useState();

    // set error msg // 
    const [errorText, setErrorText]:any = useState("")

    // let navigate = new useNavigate();

    const gettingProfile = async () =>{
        // console.log(getEmail, getToken);

        const payload = {
            email:getEmail
        }
    
        const headerConfig = {
            headers:{
                'Content-Type': 'application/json',
                'access-token': getToken
            }
        }
     
            try{
                const gettingData = await axios.post(`${isSettingAPI}/backend/userprofile`, payload, headerConfig);
                // console.log(gettingData);
                if(gettingData.data.isError === false){
                    // console.log(gettingData.data);
                    setIsEmail(gettingData.data.text.email);
                    setIsFirstName(gettingData.data.text.firstname);
                    setIsLastName(gettingData.data.text.lastname);
                    setIsPhone(gettingData.data.text.phone);
                    setIsAddress(gettingData.data.text.address);
                    setIsPostCode(gettingData.data.text.postcode);
                    // console.log(isEmail, isFirstName, isLastName, isPhone, isAddress, isPostCode);
                }else{
                    setErrorText(gettingData.data.text);
                    alert(gettingData.data.text);
                    const path = "../loginpage"
                    // navigate(path)
                    // console.log("from error text ==> ",errorText);
                }
        
            }catch(err){
                setErrorText(err);
                alert(err);
                const path = "../loginpage"
                // navigate(path)
                // console.log(errorText);
            }
    }

    const onHanddleUpdate = async () => {
        // console.log("update start..");

        const payload = {
            firstname:isFirstName,
            lastname:isLastName,
            email:isEmail,
            password:ispassword,
            address:isAddress,
            postcode:isPostCode,
            phone:isPhone,
            containerCode: "" // !! waiting full script !! //
        }

        const headerConfig = {
            headers:{
                'Content-Type': 'application/json',
                'access-token': getToken
            }
        }

        const statusOut = await axios.put("/backend/userprofile", payload, headerConfig)

        if(statusOut.data.isError === false){
            alert(statusOut.data.text);
            const path = "../profile";
            // navigate(path);
        }


    }

    useEffect(() => {
        gettingProfile();
    },[])

    return(
        <IonApp>
            <IonContent>
                <>
                {
                isEmail === undefined && isFirstName === undefined && isLastName === undefined && isPhone === undefined && isAddress === undefined 
                && isPostCode === undefined && <h1 style={{textAlign:"center", marginTop: "50%"}}>Loading..</h1>
                }

                {
                isEmail !== undefined && isFirstName !== undefined && isLastName !== undefined && isPhone !== undefined && isAddress !== undefined 
                && isPostCode !== undefined && 
                <>
                    <div className="allInfoBox">
                        <div className="taiLogo">
                            <img src={tailogo} height="50px" width="50px"/>
                        </div>
                        <div className="email-Box">
                            <input placeholder="Email"
                                value={isEmail}
                                onChange={(e) => setIsEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input placeholder="First Name"
                                value={isFirstName}
                                onChange={(e) => setIsFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="last-Name-Box">
                            <input placeholder="Last Name"
                                value={isLastName}
                                onChange={(e) => setIsLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="address-Box">
                            <input placeholder="Address"
                                value={isAddress}
                                onChange={(e) => setIsAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="post-Code-Box">
                            <input placeholder="Post Code"
                                value={isPostCode}
                                onChange={(e) => setIsPostCode(e.target.value)}
                                required
                            />
                        </div>
                        <div className="phone-Box">
                            <input placeholder="Phone Number"
                                value={isPhone}
                                onChange={(e) => setIsPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password-Box">
                            <input placeholder="Password"
                                value={ispassword}
                                onChange={(e) => setIspassword(e.target.value)}
                                type="password"
                            />
                        </div>
                        <div className="CF-password-Box">
                            <input placeholder="Confirm Password"
                                value={isComfirmPassword}
                                onChange={(e) => setUsComfirmPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                        <div className="Submit-Button">
                            <button onClick={onHanddleUpdate}>Confirm and Submit</button>
                        </div>
                    </div>
                </>
                }

                {
                    setErrorText !== "" && <h5 style={{color: "red"}}>{errorText}</h5>
                }
                </>
            </IonContent>
        </IonApp>
    )   
}

export default UpdateProfile;
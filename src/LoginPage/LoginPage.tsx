import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonIcon, IonRouterLink } from '@ionic/react'
import React from 'react';
import "./LoginPage.css";
import {keyOutline, readerOutline} from "ionicons/icons";
import TAIlogo from "../images/TAI Logo@2x.png";
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <IonApp>
        <IonHeader>
            <IonToolbar>
                <IonTitle className='Ion-Header' color='secondary'>Please Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
            <IonGrid>
                <IonRow ><img className='TAI-Head-Logo' src={TAIlogo} height="50px" width="50px"/></IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'>User E-mail</IonLabel>
                            <IonInput placeholder='E-mail' required></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position='floating'>User Password</IonLabel>
                            <IonInput type='password' placeholder='Password' required></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className='Log-Re-Button'>
                    <IonCol className='LoginBut'>
                        <IonButton fill='outline' type='submit'><IonIcon slot="start" icon={keyOutline}/>LogIn</IonButton>
                    </IonCol>
                    <IonCol><IonRouterLink routerLink="/registration"><IonButton fill='outline'><IonIcon slot='start' icon={readerOutline}/>Register</IonButton></IonRouterLink></IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonApp>

  )
}

export default LoginPage;
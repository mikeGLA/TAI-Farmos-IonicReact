import { IonApp, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonGrid, IonButton } from '@ionic/react';
import React from 'react';
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <IonApp>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Register Form</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className='Reg-Form'>
          <IonGrid>
            <IonItem lines='none'>Please Fill the From Below</IonItem>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>E-mail</IonLabel>
                  <IonInput type="text" placeholder='Email' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>First name</IonLabel>
                  <IonInput type="text" placeholder='First name' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Last name</IonLabel>
                  <IonInput type="text" placeholder='Last name' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Address</IonLabel>
                  <IonInput type="text" placeholder='Address' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>PostCode</IonLabel>
                  <IonInput type="number" placeholder='PostCode' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Phone number</IonLabel>
                  <IonInput type="text" placeholder='Phone number' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Password</IonLabel>
                  <IonInput type="password" placeholder='Password' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>ContainerCode</IonLabel>
                  <IonInput type="text" placeholder='ContainerCode' required></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton>Submit</IonButton>
              </IonCol>
              <IonCol>
                <IonButton>LogIn</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
    </IonApp>

  )
}

export default RegisterPage;
import {
  IonApp,
  IonContent,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";
import React from "react";
import { Route } from "react-router-dom";
import PlantDetail from "../Plantdetail/PlantDetail";
import Consumption from "../Consumption/Consumption";
import DashboardBody from "../Dashboard/DashboardBody/DashboardBody";
import System from "../System/System";
import LoginPage from "../LoginPage/LoginPage";
import Dashborad from "../Dashboard/Dashboard";

const FooterBar = () => {
  return (
    <IonApp>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/plantdetail">
              <PlantDetail />
            </Route>
            <Route exact path="/consumption">
              <Consumption />
            </Route>
            <Route exact path="/dashboard">
              <Dashborad />
            </Route>
            <Route exact path="/system">
              <System />
            </Route>
            <Route exact path="/loginpage">
              <LoginPage />
            </Route>
          </IonRouterOutlet>
          <IonTabBar>
            <IonTabButton tab="PlantDetail"></IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonApp>
  );
};

export default FooterBar;

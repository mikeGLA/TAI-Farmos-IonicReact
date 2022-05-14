import { Redirect, Route, Link, BrowserRouter } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonFooter,
  IonRouterOutlet,
  IonToolbar,
  setupIonicReact,
  IonRouterLink,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import Consumption from "./Consumption/Consumption";
import PlantDetail from "./Plantdetail/PlantDetail";
import System from "./System/System";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import FooterBarReact from "./FooterBar/FooterBarReact";
import "./App.css";
import Leaf from "./images/leaf.png";
import Droplet from "./images/Vector.png";
import HomeButton from "./images/home.png";
import HeartBeat from "./images/activity.png";
import Gear from "./images/gear.png";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { Router } from "workbox-routing";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/loginpage">
            <LoginPage />
          </Route>
          <Route exact path="/registerpage">
            <RegisterPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/consumption">
            <Consumption />
          </Route>
          <Route exact path="/plantdetail">
            <PlantDetail />
          </Route>
          <Route exact path="/system">
            <System />
          </Route>
          <Route exact path="/updateprofile">
            <UpdateProfile />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonContent>
    <IonFooter>
      <IonContent className="footerCon">
        <div className="FooterBar-Flex">
          <div className="Footer-Plant">
            <IonRouterLink routerLink="/plantdetail">
                <img src={Leaf} width="29px" height="29px" />
            </IonRouterLink>
          </div>
          <div className="Footer-Consump">
            <IonRouterLink routerLink="/consumption">
                <img src={Droplet} width="29px" height="29px" />
            </IonRouterLink>
          </div>
          <div className="Footer-Dashboard">
            <IonRouterLink routerLink="/dashboard">
                <img className="MoveTheFuckingHouse" src={HomeButton} width="29px" height="29px" />
            </IonRouterLink>
          </div>
          <div className="Footer-Sys">
            <IonRouterLink routerLink="/system">
                <img src={HeartBeat} width="29px" height="29px" />
            </IonRouterLink>
          </div>
          <div className="Footer-Login">
            <IonRouterLink routerLink="/loginpage">
                <img src={Gear} width="29px" height="29px" />
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonFooter>
  </IonApp>
);

export default App;

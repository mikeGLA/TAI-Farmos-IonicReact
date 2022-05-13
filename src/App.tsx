import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonFooter, IonRouterOutlet, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import Dashboard from "./Dashboard/Dashboard";
import Consumption from "./Consumption/Consumption";
import PlantDetail from "./Plantdetail/PlantDetail";
import System from "./System/System"
import UpdateProfile from './UpdateProfile/UpdateProfile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';




setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/loginpage">
          <LoginPage />
        </Route>
        <Route exact path="/registration">
          <RegisterPage/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/consumption">
          <Consumption/>
        </Route>
        <Route exact path="/plantdetail">
          <PlantDetail/>
        </Route>
        <Route exact path="/system">
          <System/>
        </Route>
        <Route exact path="/updateprofile">
          <UpdateProfile/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    {/* <IonFooter>
      <IonToolbar></IonToolbar>
    </IonFooter> */}
  </IonApp>
);

export default App;

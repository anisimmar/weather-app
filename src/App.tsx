import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";

function App() {
    return (
        <div className='global_container'>
            {/*<Popup/>*/}
            <div className='container'>
                <Header/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

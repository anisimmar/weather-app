import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className='container'>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
            </Switch>
        </div>
    );
}

export default App;

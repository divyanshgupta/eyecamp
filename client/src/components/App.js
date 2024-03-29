import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions'
import Header from './Header';
import Landing from './LandingPage'
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


// const App = () =>
// {
//     return (
//         <div className="container">
//             <BrowserRouter>
//                 <div>
//                     <Header />
//                     <Route path="/" exact={true} component={Landing}></Route>
//                     <Route path="/surveys" exact={true} component={Dashboard}></Route>
//                     <Route path="/surveys/new" exact={true} component={SurveyNew}></Route>
//                 </div>

//             </BrowserRouter>
//         </div>
//     )
// }

class App extends Component
{
    componentDidMount()
    {

            this.props.fetchUser()
    }
    render()
    {

        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact={true} component={Landing}></Route>
                        <Route path="/surveys" exact={true} component={Dashboard}></Route>
                        <Route path="/surveys/new" exact={true} component={SurveyNew}></Route>
                    </div>

                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,actions)(App)
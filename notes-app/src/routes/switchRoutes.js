import React from 'react'
import { Router, Route } from 'react-router-dom'
import NewNotes from './../components/NewNotes'
import history from './history'
import LandPage from './../components/LandPage'
import MyNotes from './../components/MyNotes'

function switchRoutes() {
    return (
        <div>
            <Router history={history}>
            <Route exact path='/' component={props => <LandPage {...props}/>}/>
                <Route exact path='/notes' component={props => <NewNotes {...props}/>}/>
                <Route exact path='/mynotes' component={props => <MyNotes {...props}/>}/>
            </Router>
        </div>
    )
}

export default switchRoutes

import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'


import Groups from './components/Groups'
import Group from './components/Group'
import App from './components/App'
import Home from './components/Home'
import NewGroup from './components/NewGroup'



const Routes = (
<Router>
  <div>

    <Route exact path='/' component={ Home } />
    <Route exact path='/groups' component={ Groups } />
    <Route exact path='/newgroup' component={ NewGroup } />
    <Route exact path='/groups/:id' component={ Group } />





  </div>
</Router>
)


export default Routes

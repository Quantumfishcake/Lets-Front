import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Groups from './components/Groups'
import Group from './components/Group'
import Home from './components/Home'
import NewGroup from './components/NewGroup'
import EditGroup from './components/EditGroup'

import Event from './components/Event'
import Events from './components/Events'
import Newevent from './components/Newevent'


const Routes = (
  <Router>
    <div>

      <Route exact path='/' component={Home} />

      <Route exact path='/groups' component={Groups} />
      <Route exact path='/newgroup' component={NewGroup} />
      <Route exact path='/groups/:id' component={Group} />
      <Route exact path='/groups/:id/edit' component={EditGroup} />
      

      <Route exact path='/events' component={Events} />
      <Route exact path='/newevent' component={Newevent} />
      <Route exact path='/events/:id' component={Event} />

    </div>
  </Router>
)

export default Routes

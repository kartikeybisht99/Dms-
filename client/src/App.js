import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'

import SideDrawer from './components/Navbar/SideDrawer'
import Auth from './components/Auth/Auth'
import Section1 from './components/Sections/Section1'
import Section2 from './components/Sections/Section2'
import Section3 from './components/Sections/Section3'
import Form from './Forms/Forms'

const App = () => (
  <BrowserRouter>
    <Container maxWidth='lg'>
      <SideDrawer />
      <Switch>
        <Route path='/Section1'>
          <Section1 />
        </Route>
        <Route path='/Section2'>
          <Section2 />
        </Route>
        <Route path='/Section3'>
          <Section3 />
        </Route>
        <Route path = '/form'>
          <Form/>
        </Route>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default App

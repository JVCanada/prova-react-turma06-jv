import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import Blocks from './pages/Blocks/Blocks'
import Cards from './pages/Cards/Cards'
import Forms from './pages/Forms/Forms'
import Pricing from './pages/Pricing/Pricing'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/pricing" component={Pricing}/>
            <Route component={NotFound}/>
        </Switch>
    )
}
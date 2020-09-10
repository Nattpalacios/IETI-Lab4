import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewTask from './components/NewTask';

export default ()=>(

    <Router>
        <Switch>
            <Route path="/newTask" exact component = {NewTask}/>
        </Switch>
    </Router>
);
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={UserList} />
                    <Route path="/user/:id" component={UserDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

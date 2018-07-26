import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import createStore from './store';
import history from './store/history';
import Chat from './containers/Chat'

const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={Chat} /> }/>                     
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
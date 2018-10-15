import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './utils/routes/routes';
import { ApolloProvider } from 'react-apollo';
import { client } from './utils/client/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './utils/redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import './css/app.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const store = createStore(rootReducer, applyMiddleware(thunk));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#009688'
        },
    },
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Routes />
            </MuiThemeProvider>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement);
registerServiceWorker();
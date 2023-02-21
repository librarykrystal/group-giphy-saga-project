import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('SET_SEARCH_TERM', fetchSearchResults);
    // yield takeEvery('FETCH_RESULTS', fetchSearchResults);
}

//SAGA
function* fetchSearchResults(action) {
    try {
        // console.log('SAGA payload:', action.payload);
        yield axios.get('/api/giphy', action.payload);
    } catch (err) {
        console.log('GET SEARCH RESULTS ERROR', err);
    }
}


const sagaMiddleware = createSagaMiddleware();

// REDUCER
const searchTerm = (state = '', action) => {
    switch (action.type) {
    case 'SET_SEARCH_TERM':
        return action.payload;
    default:
        return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchTerm
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


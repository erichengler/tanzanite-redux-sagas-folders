import { all } from 'redux-saga/effects';
import elementSaga from './element.saga.js'

// Our rootSaga bundles all other sagas together

export default function* rootSaga() {
    yield all([
        elementSaga(),
        // More sagas go here
    ]);
}
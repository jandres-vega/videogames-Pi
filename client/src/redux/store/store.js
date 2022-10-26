import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../redux/reducer';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

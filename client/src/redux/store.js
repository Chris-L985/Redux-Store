import { createStore } from 'redux/store';
import reducer from '../utils/reducers';

const store = createStore(reducer);
export default store;
import { Provider } from 'react-redux' ;
import { configureStore} from '@reduxjs/toolkit';
const rootReducer = require('./reducers/index')


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

const DataProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider
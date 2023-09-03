import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const defaultState =
{
  cash: 0,
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      if (action.payload < 0) {
        alert("Нельзя добавить отрицательное значение!");
        return state;
      }
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      if (state.cash - action.payload < 0) {
        alert("Недостаточно средств на счёте!")
        return state;
      }
      if (action.payload < 0) {
        alert("Нельзя снять отрицательное значение!");
        return state;
      }
      return { ...state, cash: state.cash - action.payload }
    case "RESET_CASH":
      return { ...state, cash: 0 }
    default:
      return state
  }
}

const Store = configureStore({ reducer: reducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

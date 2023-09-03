import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash)

  const getNumericInput = (message) => {
    let input = null;
    while (input === null || isNaN(input)) {
      input = prompt(message);
      if (input !== null) {
        input = parseFloat(input);
      }
      if (isNaN(input)) {
        alert("Пожалуйста, введите только число")
      }
      else {
        break;
      }
    }
    return input;
  }
  const resetCash = () => {
    dispatch({ type: "RESET_CASH", payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }
  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  return (
    <div className="App">
      <div>Сейчас на счёте: {cash}</div>
      <button type="button" onClick={() => addCash(getNumericInput("Введите сумму"))}>Пополнить счёт</button>
      <button type="button" onClick={() => getCash(getNumericInput("Введите сумму"))}>Снять со счёта</button>
      <button type="button" onClick={() => resetCash()}>Обнулить счёт</button>
    </div>
  );
}

export default App;

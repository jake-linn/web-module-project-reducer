import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, {initialState} from './reducers';

import {changeOperation, applyNumber, clearDisplay, addMemory, recallMemory,clearMemory} from './actions'; 

function App() {

  // Use useReducer hook to get access to the application state and the dispatch function.

  const [state, dispatch] = useReducer (reducer, initialState) 

const handleNumber = (num) => {
  dispatch(applyNumber(num))
}
const handleOperator = (operator) => {
  dispatch(changeOperation(operator))

}
const handleClear = () => {
  dispatch(clearDisplay());

}

const handleAddMemory = () => {
  dispatch(addMemory())
} 
const handleRecallMemory = () => {
  dispatch(recallMemory());
}
const handleClearMemory = () => {
  dispatch(clearMemory());
}



  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
  <span id="operation"><b>Operation:</b> {state.operation}</span>
  <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() =>  handleAddMemory()} value={"M+"}/>
              <CalcButton onClick= {() => handleRecallMemory()} value={"MR"}/>
              <CalcButton onClick = {() => handleClearMemory()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => handleNumber(1)} value={1}/>
              <CalcButton onClick = {() => handleNumber(2)} value={2}/>
              <CalcButton onClick = {() => handleNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => handleNumber(4)}value={4}/>
              <CalcButton onClick = {() => handleNumber(5)} value={5}/>
              <CalcButton onClick = {() => handleNumber(6)}value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => handleNumber(7)}value={7}/>
              <CalcButton onClick = {() => handleNumber(8)} value={8}/>
              <CalcButton onClick = {() => handleNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick = {() => handleOperator('+')} value={"+"}/>
              <CalcButton onClick  = {() => handleOperator('*')} value={"*"}/>
              <CalcButton onClick  = {() => handleOperator('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick = {() => handleClear()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

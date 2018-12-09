import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';


const INCREMENT = 1, DECREMENT = 2;

const Counter = ({count, increment, decrement}) => {
  return (
    <div className="counter">
      <div>React-Redux Counter</div>
      <div className="controls">
        <button onClick={decrement}>-</button>
        <div>{count}</div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: INCREMENT}),
    decrement: () => dispatch({type: DECREMENT})
  };
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Counter);

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    break;
    case DECREMENT:
      return {
        count: state.count - 1
      };
    break;
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedComponent />
  </Provider>,
  document.querySelector('#root')
);

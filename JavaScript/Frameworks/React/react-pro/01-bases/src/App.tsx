
import { Counter } from './Counter/Counter';
import { CounterBy } from './Counter/CounterBy';
import { CounterEffect } from './Counter/CounterEffect';
import { CounterHook } from './Counter/CounterHook';
import { CounterReducer } from './counter-reducer/CounterReducer';

function App() {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  );
}

export default App;

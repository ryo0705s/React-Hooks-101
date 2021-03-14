// import logo from './logo.svg'
// import './App.css'
import React, {useState} from 'react'
const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  // const reset = () => {
  //   // setPrice(props.price)
  //   // setName(props.name)
  //   setState(props)
  // }
  return (
    <>
    <p>現在の{name}は、{price}円です。</p>
    {/* <button onClick={() => setPrice(price + 1)}>+1</button> */}
    <button onClick={() => setState({...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: price - 1})}>-1</button>
    <button onClick={() => setState(props)}>Reset</button>
    {/* <input value={name} onChange={e => setName(e.target.value)}/> */}
    <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}
App.defaultProps = {
    name: '',
    price: 1000
  }

export default App

// const [count, setCount] = useState(0)
// const increment = () => setCount(count + 1)
// const decrement = () => setCount(count - 1)
// const increment2 = () => setCount(previousCount => previousCount + 1)
// const decrement2 = () => setCount(previousCount => previousCount - 1)
// const reset = () => setCount(0)
// const double = () => setCount(count * 2)
// const divide3 = () => setCount(previousCount => 
//   previousCount % 3 === 0 ? previousCount / 3 : previousCount)
  // if (previousCount %  3 === 0) {
  //   return previousCount / 3
  // } else {
  //   return previousCount
  // }
// })
      // <div>count: {count}</div>
      // <div>
      // <button onClick={increment}>+1</button>
      // <button onClick={decrement}>-1</button>
      // </div>
      // <div> 
      // <button onClick={increment2}>+1</button>
      // <button onClick={decrement2}>-1</button>
      // </div>
      // <div>
      //   <button onClick={reset}>Reset</button>
      //   <button onClick={double}>×2</button>
      //   <button onClick={divide3}>３の倍数の時だけ３で割る</button>
      // </div>
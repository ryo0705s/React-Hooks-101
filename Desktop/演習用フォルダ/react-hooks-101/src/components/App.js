import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
// import Event from './Event'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

// console.log({AppContext})

const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [state, dispatch] = useReducer(reducer, [])
  // console.log(state, 'in App.js')
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")
  // const addEvent = e => {
  //   e.preventDefault()
  //   // e.target.value
  //   console.log{title, body}
  //   dispatch({
  //     type: 'CREATE_EVENT'
  //     title,
  //     body
  // })
  //   // dispatch(action)
  //   // action = {
  //   //   type: 'CREATE_EVENT'
  //   //   title,
  //   //   body
  //   // }
  //   setTitle('')
  //   setBody('')
  // }
  // const deleteAllEvents = e => {
  //   e.preventDefault()
  //   const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
  //  if (result) dispatch({ type: 'DELETE_ALL_EVENTS'})
  // }
  // const unCreatable = title === '' || body === ''
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        {/* <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} /> */}
      </div>
    </AppContext.Provider>
  )
}

export default App

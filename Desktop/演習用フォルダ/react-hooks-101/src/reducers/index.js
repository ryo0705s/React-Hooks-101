const (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = {title: action.title, body: action.body}
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...event }]
      // let id
      // if (length === 0) {
      //   id = 1
      // } else {
      //   id = state[length - 1].id + 1
      // }
      // return state
    case 'DELATE_EVENT':
      return state
    case 'DELATE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events
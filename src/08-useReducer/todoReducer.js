

export const todoReducer = ( state = [], { type, payload}) => {
  switch (type) {
   case '[TODO] ADD TODO':
      
      return [
         ...state,
         payload
      ]
      
   case '[TODO] REMOVE TODO':
      
      return state.filter( todo => todo.id !== payload)
   
   case '[TODO] DONE TODO':
      
      return state.map( todo => (todo.id === payload) ? { ...todo, done:!todo.done } : todo
      
      )
      
   default:
      return state;
  }
}

export const addTodoAction = (todo)=>({
   type:'[TODO] ADD TODO',
   payload: todo
})

export const removeTodoAction = (id)=>({
   type:'[TODO] REMOVE TODO',
   payload: id
})

export const doneTodoAction = (id)=>({
   type:'[TODO] DONE TODO',
   payload: id
})



const initialState = [
   {
      id:1,
      todo:'Recolectar la piedra del alma',
      done:false
   }
];

const todoReducer = ( state=initialState , action = {} )=>{

   switch (action.type) {
      case '[TODO] add todo':
         return [
            ...state,
            action.payload
         ]
   
      default:
         return state;
   }
   
}

let todos = todoReducer();

const newTodo = {
   id:2,
   todo:'Comprar pan',
   done:false
}

const addTodoAction = {
   type:'[TODO] add todo',
   payload: newTodo
}

todos = todoReducer( todos, addTodoAction);

console.log('state: ', todos)
import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState ={
    todos:[{"id":"1","name":"Dummy task ..","isDone":false}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        fetchAllTodos:(state,actions)=>{
            state.todos = [...actions.payload]
        },
        addTodos:(state,actions)=>{
            const todo= {
                "id":nanoid(),
                "name":actions.payload.inputValue,
                "isDone":actions.payload.isDone
            }
            state.todos.push(todo)
        },
        removeTodos:(state,actions)=>{
            state.todos = state.todos.filter(todo=> actions.payload.id!= todo.id)
        },
        doneTodos:(state,actions)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id==actions.payload.id){
                    return {...todo,isDone:!todo.isDone}
                }
                
                return todo
            })
        },
        updateTodos:(state,actions)=>{
            state.todos = state.todos.map(todo =>{
                if(todo.id==actions.payload.id){
                    return {...todo,name:actions.payload.inputValue}
                }
                
                return todo
            })
        }
    }
})

export const {addTodos,removeTodos,doneTodos,updateTodos,fetchAllTodos} = todoSlice.actions
export default todoSlice.reducer
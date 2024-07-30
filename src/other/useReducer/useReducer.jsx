import { useReducer } from "react"


const useReducerLearn = () => {
    const reducer = (state, action) => {
        console.log("dispatching action", action)
        switch (action.type) {
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            default:
                throw new Error("Unsupported action type")
        }
    }
    const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1>useReducer Hook</h1>
      <button className="btn" onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      {state}
      <button className="btn" onClick={()=>dispatch({type:"DECREMENT"})} >-</button>
    </div>
  )
}

export default useReducerLearn

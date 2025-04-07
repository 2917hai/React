import React from 'react'
import { useReducer } from 'react'

const Second = () => {

    const InitialState=
    {
        count:0,
        grad:'A',
        amount:500,
        result:85

    }
   const MyReducer=(state,action)=>
    {
       switch(action.value)
       {
        
        case "countInc":
            {
                return {
                    ...state,           //  means baki ki value same hogi 
                    count:state.count+1};
            }
            case "countDec":
                {
                    return {
                        ...state,             //  means baki ki value same hogi 
                        count:state.count-1};
                }
                case "gradToper":
                    {
                      switch(state.grad)
                      {
                        case 'A':
                            {
                                return {
                                    ...state,                 
                                    grad:state.grad=95}
                            }
                            case 'B':
                                {
                                    return {
                                        ...state,
                                        grad:state.grad=80}
                                }
                                case 'c':
                                    {
                                        return {
                                            ...state,
                                            grad:state.grad=50}
                                    }
                                    case 'D':
                                        {
                                            return {
                                                ...state,
                                                grad:state.grad=40}
                                        }
                                        case 'E':
                                            {
                                                return {
                                                    
                                                    ...state,grad:state.grad=34}
                                            }
                      }
                    }
                    case "perTograd":
                        {
                            switch(state.result)
                            {
                                
                                case 85:
                                    {
                                        return {
                                            ...state,
                                            result:state.result='A'}
                                    }
                                    case 75:
                                        {
                                            return {
                                                ...state,
                                                result:state.result='B'}
                                        }
                                        case 65:
                                            {
                                                return {
                                                    ...state,
                                                    result:state.result='C'}
                                            }
                                            case 50:
                                                {
                                                    return {
                                                        ...state,
                                                        result:state.result='D'}
                                                }
                                                case 40:
                                                    {
                                                        return {
                                                            ...state,
                                                            result:state.result='E'}
                                                    }
                                                    case 33:
                                                        {
                                                            return {
                                                                ...state,
                                                                result:state.result="Fail"}
                                                        }
                                  
                            }
                        }
                        case "amountInc":
                            {
                                return {
                                    ...state,
                                    amount:state.amount+100}
                            }
                            case "amountDec":
                                {
                                    return {
                                        ...state,
                                        amount:state.amount-100}
                                }
                                case "reset":
                                    {
                                       return state=InitialState;
                                    }
                                default:
                                    return state;
                                    
           
       }
      
   }
    

    const [state,dispatch]=useReducer(MyReducer,InitialState)
  return (
    <div>
      <h1>This is second component of useReducer advance practice </h1>
      <h1>Here your counter value is :{state.count}</h1>
      <h1>Here your grade value is :{state.grad}</h1>
      <h1>Here your result value is :{state.result}</h1>
      <h1>Here your amount value is :{state.amount}</h1>
      <button onClick={()=>dispatch({value:"countInc"})}>count Inc</button>
      <button onClick={()=>dispatch({value:"countDec"})}>count Drc</button>
      <button onClick={()=>dispatch({value:"gradToper"})}>grad to per</button>
      <button onClick={()=>dispatch({value:"perTograd"})}>per to grad</button>
      <button onClick={()=>dispatch({value:"amountInc"})}>Amount Inc</button>
      <button onClick={()=>dispatch({value:"amountDec"})}>Amount Drc</button>
      <button onClick={()=>dispatch({value:"reset"})}>Reset all data</button>
    </div>
  )
}

export default Second

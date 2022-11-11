import { createContext, useState } from "react";

// Step 1
const CounterContext = createContext({
counter : 0,
handleCounter : () => {}
});

// Step 2
const CounterProvider = ({children}:{children:any}) => {
// Step 3
const [counter,setCounter] = useState(0);
//Step 4
const handleCounter = () => {
setCounter((prevValue:any) => prevValue + 1);
}
//Step 5
const counterObj = {counter,handleCounter}
// Step 6
return(
<CounterContext.Provider value={counterObj}>
{children}
</CounterContext.Provider>
)
}
// Step 7
export { CounterProvider , CounterContext}
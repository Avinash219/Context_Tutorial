import { useContext } from "react";
import { CounterContext} from './CounterContext';

const Body = () => {

const { handleCounter} = useContext(CounterContext); // Step 1
const incCounter = () => {       // Step 2
handleCounter();
}
return(
<button onClick={incCounter}>
Increase Counter
</button>
)
}

export default Body
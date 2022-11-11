import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Header = () => {
const { counter } = useContext(CounterContext);   // Step 1 
return(
<h1>Counter value is - {counter}</h1>           // Step 2 
)
}
export default Header;
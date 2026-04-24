import { useState } from 'react'
import './style.css'

function atividade1(){

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [resultado, setResultado] = useState("")


function handleSubimit(event) {
event.preventDefault();
console.log(num1, num2, resultado)
setResultado(num1+num2)
}
        return(
            <>
            <form>
     

<label>Digite o primeiro numero </label>
<input
    type="text" 
    value={num1}
    onChange={(e) => setNum1(e.target.value)}
/>


<label>Digite o segundo numero</label>
<input
    type="text" 
    value={num2}
    onChange={(e) => setNum2(e.target.value)}
    
/>

      <p>{resultado}</p>

<button type="submit">exercicio1</button>

            </form>  
          
          </>
           
        )

      

}

export default atividade1
import React, {useState} from 'react'

const Calculadora = () => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [resultado, setResultado] = useState(0)
    const sumarNros = () => {
        const suma = parseInt(n1) + parseInt(n2)
        setResultado(suma);
    }

  return (
    <div>
        <h1>Calculadora</h1>
        <input type='number' value={n1} onChange={(e) => setN1(e.target.value)}></input>
        <input type='number' value={n2} onChange={(e) => setN2(e.target.value)}></input>
        <button onClick={sumarNros}>Sumar</button>
        <p>Resultado: {resultado}</p>
    </div>
  )
}

export default Calculadora
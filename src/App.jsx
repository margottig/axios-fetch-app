import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [listagatos, setListagatos] = useState([]);

  // const url = "https://cataas.com/cat/says/hola"

// USANDO ******************************** FETCH **************************************
//   useEffect(()=>{
//     fetch('https://cataas.com/api/cats?tags=cute')
//     .then((respuesta)=>{
//        console.log(respuesta.json());
//       return respuesta.json()
//     })
//     .then((resultado) =>{
//       console.log(resultado);
//       setListagatos(resultado)
// ;    })
//     .catch((error)=>{
//       console.log(error);
//     })
//   }, [])

// *********************  USANDO AXIOS ***********************************
//   useEffect(()=>{
//     axios.get('https://cataas.com/api/cats?tags=cute')
//     .then((resultado) =>{
//       console.log(resultado.data);
//       setListagatos(resultado.data)
// ;    })
//     .catch((error)=>{
//       console.log(error);
//     })
//   }, [])


// ***********************   USANDO AXIOS CON ASYNC/AWAIT ****************************
  useEffect(() =>{
    const llamarGatos = async () => {
    // async function llamarGatos() {
      try{
        const resultado = await axios.get('https://cataas.com/api/cats?tags=cute')
        console.log(resultado)
        setListagatos(resultado.data)
       }
       catch(error){
         console.log(error)
   
       }
    }
    llamarGatos()
  }, [])


  // const consultaGatos = async () => {
  //   try{
  //    const resultado = await axios.get('https://cataas.com/api/cats?tags=cute')
  //    console.log(resultado)
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  return (
    <div className="App">
      <h1> CAATAS</h1>
      <button /* onClick={consultaGatos}*/ > Traer gatos</button>
      {
        listagatos.map((gato)=>(
          <>
            {/* <p>{gato.tags[0]}</p> */}
            <img src={`https://cataas.com/cat/${gato.tags[0]}/says/hola`} alt="" />
          </>
        ))
      }
    </div>
  );
}

export default App;

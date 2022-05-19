import logo from './logo.svg';
import './App.css';

function App() {

  let message = ["el contenido de tab1","el contenido de tab2", "el contenido de tab3"];

  const mostrarMensaje = (event, value) => {
    alert(value);
   
  }
  return ( message.map((item, index) => {
          return <button onClick={ (event) => mostrarMensaje(event, item)}> Tab{index+1} </button>
        })
  );
}

export default App;

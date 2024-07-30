import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import Sidebar from './componentes/Sidebar';
import Tarea from './componentes/Tareas';
import './App.css';

function App() {
  return (

    <div className="aplicacion-tareas">
      <div className="inline-container">
        <Header />
      </div>
      <Nav />
      <div className='main-content' >
        <Sidebar />
        <div className='lista-tareas'>
          <h1>Lista de Tareas</h1>
          Componente
          <Tarea texto="Aprendiendo React en Diseño de Interfaces" />

        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;

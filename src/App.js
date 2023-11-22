import './App.css';
import pantalla1 from "./assets/pantallas.png"
import NavBar from './components/nav/navbar';
import About from './components/about/about';
import WebDesktop from './components/webDesktop/webDesk';

function App() {
  return (
    <div className="App">
      {/* <img className='pantallaDesk' src={pantalla1} alt='...'/> */}
      <NavBar/>
      <About/>
      <WebDesktop/>
    </div>
  );
}

export default App;

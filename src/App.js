import './App.css';
import NavBar from './components/nav/navbar';
import About from './components/about/about';
import WebDesktop from './components/webDesktop/webDesk';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      {/* <WebDesktop/> */}
    </div>
  );
}

export default App;

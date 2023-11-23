import './App.css';
import NavBar from './components/nav/navbar';
import About from './components/about/about';
import WebDesktop from './components/webDesktop/webDesk';
import WebPhone from './components/webPhone/webPhone';
import WebGame from './components/webGame/webGame';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <WebDesktop/>
      <WebPhone/>
      <WebGame/>
    </div>
  );
}

export default App;

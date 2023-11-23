import './App.css';
import NavBar from './components/nav/navbar';
import About from './components/about/about';
import WebDesktop from './components/webDesktop/webDesk';
import WebPhone from './components/webPhone/webPhone';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <WebDesktop/>
      <WebPhone/>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/Home/nav/navbar';
import About from './components/Home/about/about';
import WebDesktop from './components/Home/webDesktop/webDesk';
import WebPhone from './components/Home/webPhone/webPhone';
import WebGame from './components/Home/webGame/webGame';
import BtnLinks from './components/Home/btnLinks/btnLinks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <WebDesktop/>
      <WebPhone/>
      <WebGame/>
      <BtnLinks/>
    </div>
  );
}

export default App;

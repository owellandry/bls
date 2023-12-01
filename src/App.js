import './App.css';
import NavBar from './components/Home/nav/navbar';
import About from './components/Home/about/about';
import WebDesktop from './components/Home/webDesktop/webDesk';
import WebPhone from './components/Home/webPhone/webPhone';
import WebGame from './components/Home/webGame/webGame';
import BtnLinks from './components/Home/btnLinks/btnLinks';
import Separate from './components/Home/lineSeparate/separate';
import ServicesSect from './components/Home/serviceSection/services';
import M3DSection from './components/Home/3DSection/3D';

function App() {
  return (
    <div className="App">
      <div className='containerHome'>
        <NavBar/>
        <About/>
        <WebDesktop/>
        <WebPhone/>
        <WebGame/>
        <BtnLinks/>
        <Separate/>
        <ServicesSect/>
        <M3DSection/>
      </div>
    </div>
  );
}

export default App;

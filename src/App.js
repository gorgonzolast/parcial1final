import './App.css';
import CajaDisplay from './components/CajaDisplay';

function App() {
  return (
    <div className='cont'>
      <div className="titulo-cont">
        <div className='titulo'>
          El aroma mágico
        </div>
      </div>
      <div className="banner">
        <hr className="line"></hr>
        <div className="image"></div>
        <hr className="line"></hr>
      </div>
      <CajaDisplay />

    </div>
  );
}

export default App;

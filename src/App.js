import './App.css';
import Grid from './components/Grid'
import ColorPicker from './components/ColorPicker';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">Pixely Redux</h1>
      </header>
     <Grid />
     <ColorPicker />
     <Buttons />
    </div>
  );
}

export default App;

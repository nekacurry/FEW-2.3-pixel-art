import './App.css';
import Grid from './components/Grid'
import ColorPicker from './components/ColorPicker';
import FillColor from './components/FillColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">Pixely Redux</h1>
      </header>
     <Grid />
     <ColorPicker />
     <FillColor />
    </div>
  );
}

export default App;

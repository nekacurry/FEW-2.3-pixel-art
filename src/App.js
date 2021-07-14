import './App.css';
import Grid from './components/Grid'
import ColorPicker from './components/ColorPicker';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
// import Save from './components/Save';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-title">PixelP Redux</h1>
      </header>
     <Grid />
     <ColorPicker />
     <Buttons />
     {/* <Save /> */}
     <Footer />
    </div>
  );
}

export default App;

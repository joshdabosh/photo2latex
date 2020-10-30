import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Photo2LaTex</h1>
            <p>A free, online, convenient tool to to convert your handwritten papers to LaTex 
            code, with the click of a button.</p>
          </div>

          <Button>Learn More</Button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

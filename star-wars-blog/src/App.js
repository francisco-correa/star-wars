import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from "./components/CardCharacters"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="container-fluid">
     <NavBar></NavBar>
        <h2>Characters</h2>
          <div className="row">
            <div className="col-12">
              <Card></Card>
            </div>
        <h2>Planets</h2>
        <h2>Vehicules</h2>
        <Button>Testing</Button>
      </div>
    </div>
  );
}

export default App;

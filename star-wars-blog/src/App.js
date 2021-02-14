import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from "./components/CardCharacters"
import NavBar from "./components/NavBar"
import {useEffect} from "react"

function App() {

  //1. Get properties from Star Wars Characters
let getCharacters = async () => {

  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  }
  const url = "https://www.swapi.tech/api/people"
  const request = await fetch(url, settings)
  
  const json = await request.json()
  const characters = json
  console.log(characters, "<-star wars characters full")
  console.log(characters.results, "<-characters array")
  console.log(characters.results[0], "<-Luke SkyWalker metadata")
  console.log(characters.results[0].name, "<-Character Name")
  }

  useEffect( ()=> {
    getCharacters()
  }, [])

  return (
    <div className="container-fluid">
     <NavBar></NavBar>
        <h2>Characters</h2>
          <div className="row">
            <div className="col-12">
              <Card
               description = "A person within the Star Wars universe"
               name = "Luke Skywalker"
               gender = "male"
               skyn_color = "fair"
               hair_color = "blond"
              />
            </div>
        <a type="button" href="#" className="btn btn-outline-primary" onClick={() => 
         getCharacters()}>Characters API</a>   
      </div>
    </div>
  );
}

export default App;

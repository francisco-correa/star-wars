import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './css/App.css';
import Information from "./components/information"
import CardCharacters from "./components/CardCharacters"
import NavBar from "./components/NavBar"
import {useEffect} from "react"
//import Button from 'react-bootstrap/Button';

function Home() {

  //1. Get properties from Star Wars Characters
let getCharacters = async () => {

  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  }
  const url = "https://www.swapi.tech/api/people"
  const url_2 = "https://www.swapi.tech/api/people/1"
  const request = await fetch(url, settings)
  const request_id = await fetch(url_2, settings)
  
  const json = await request.json()
  const json_id = await request_id.json()
  const characters = json
  const characters_id = json_id

  //console.log Characters
  console.log(characters, "<-star wars characters full")
  console.log(characters.results, "<-characters array")
  console.log(characters.results[0], "<-Luke SkyWalker metadata")
  console.log(characters.results[0].name, "<-Character Name")

   // console.log Characters_id
  console.log(characters_id, "<-star wars characters")
  console.log(characters_id.result.properties, "<-star wars characters properties-3")
  console.log(characters_id.result.properties.name, "<-star wars name")
  console.log(characters_id.result.properties.gender, "<-star wars gender")
  }

  //const [favorites, setFavorites] = useState([])
  useEffect( ()=> {
    getCharacters()
  }, [])

  return (
    <Router>
      <div className="container-fluid">
        <NavBar/>
          <h2 className="characters" style={{ color: "red" }}>Characters</h2>
            <div className="row">
              <div className="col-md-12">
                <CardCharacters/>
                 <a type="button" href="#" className="btn btn-success ml-5" onClick={() => 
                    getCharacters()}>Characters API
                 </a>  
              </div>
            </div>
      </div>
        <Switch>
          <Route path="/information">
            <Information/>
          </Route>
        </Switch>
    </Router>
  );
}

export default Home;

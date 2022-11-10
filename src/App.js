import { Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Songs from './Components/Songs';
import Favorites from './Components/Favorites';

function App() {

    return (
    <div className="App">
      <Header />
      <Navbar/>

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/songs" >
          <Songs />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesList from "./components/moviesList";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={MoviesList} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

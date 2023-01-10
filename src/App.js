import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TopHeadlines from "./components/TopHeadlines/TopHeadlines";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-headlines" component={TopHeadlines} />
          <Route component={Page404}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

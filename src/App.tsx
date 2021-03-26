import { ThemeProvider } from "react-jss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BottomNavigation from "./components/navigation/BottomNavigation";
import Header from "./components/navigation/Header";
import Alerts from "./components/pages/Alerts";
import Feed from "./components/pages/Feed";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <BottomNavigation />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/feed" />} />
          <Route path="/feed" component={Feed} />
          <Route path="/search" component={Search} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

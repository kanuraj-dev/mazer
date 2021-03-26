import { ThemeProvider } from "react-jss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import BottomNavigation from "./components/navigation/BottomNavigation";
import Header from "./components/navigation/Header";
import Feed from "./components/pages/feed/Feed";
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <BottomNavigation />
        <Switch>
          <Route path="/feed" component={Feed} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

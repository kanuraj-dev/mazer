import { ThemeProvider } from "react-jss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BottomNavigation from "./components/navigation/BottomNavigation";
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BottomNavigation />
      </Router>
    </ThemeProvider>
  );
}

export default App;

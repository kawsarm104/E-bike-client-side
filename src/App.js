
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import BikesParent from "./Pages/Products/BikesParent/BikesParent";
import SingleBikeDetails from "./Pages/Products/SingleBikeDetails/SingleBikeDetails";
import AuthRoute from "./Pages/ProtectedRoute/AuthRoute/AuthRoute";
import PrivateRoute from "./Pages/ProtectedRoute/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import NavigationMenu from "./Pages/Shared/Header/NavigationMenu/NavigationMenu";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationMenu />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>

          {/* products related  */}
          <Route exact path="/products">
            <BikesParent></BikesParent>
          </Route>
        
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
     
          <PrivateRoute exact path="/purchase/:id">
            <SingleBikeDetails></SingleBikeDetails>
          </PrivateRoute>
          <AuthRoute exact path="/login">
            <Login></Login>
          </AuthRoute>
          <AuthRoute exact path="/register">
            <Register></Register>
          </AuthRoute>
          {/* <Route path="/*">
          <NotFound></NotFound>
        </Route>  */}
          
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

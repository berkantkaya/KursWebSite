import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Messages from './components/Messages';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Product from './pages/Product';
import Detail from './pages/Detail';

function App() {
  return (
     <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/detail/:id" component={Detail}/>
      
        
      </Switch>
       <Messages/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Work from './Components/Work'
import About from './Components/About'
import Nav from './Components/Nav/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>

          <div className="App">
                
          </div>
    
        <Router> 
          <Nav />

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Work" exact component={Work}/>
            <Route path="/About" exact component={About}/>
            <Route path="/" component={ () => <div>ERROR 404 on this page - this is the wrong URL</div> }/>
          </Switch>
        
        </Router>
           <footer>
             <p>Web Agency© 2021</p>
           </footer>
     
  
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home'
import Work from './Containers/Work'
import About from './Containers/About'
import Nav from './Components/Nav/Nav'
import Content from './Components/Content/Content'
import ButtonToggle from './Components/ButtonToggle/ButtonToggle'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ThemeContextProvider from './Context/ThemeContext'


function App() {
  return (
    <>

      <div className="App">
        <Router> 

          <Nav />

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Work" exact component={Work}/>
              <Route path="/About" exact component={About}/>
              <Route path="/" component={ () => <div className="errorlink">ERROR 404 on this page - this is the wrong URL 🙅🏻‍♀️</div> }/>
            </Switch>
            
        <ThemeContextProvider>
          <Content />
        </ThemeContextProvider>
          

        </Router>

        <footer>
          <p>Web Agency© 2021</p>
        </footer>
         
      </div>
  
    </>
  );
}

export default App;

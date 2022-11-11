import logo from './logo.svg';
import './App.css';
// import Portfolio from './portfolio.jsx'
// import List from './list'
// import Pro from './pro'
// import Reactrouter from './reactrouter'

//import Home from './Home'
import Prajwal from './prajwal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        
        {/* <Reactrouter /> */}
        <Prajwal />
        
      </header>
       {/* <List />
        <Pro /> */}
         {/* <Prajwal /> */}
        
         {/* <Reactrouter /> */}
         {/* <Home /> */}
         
        
    </div>
  );
}

export default App;

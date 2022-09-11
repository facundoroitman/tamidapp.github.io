import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Notes from "./Notes";



function App() {
  return (

    <div className="App">
    <Router>
      <Navbar />
      <Routes>

        <Route exact path='/' element ={<Notes/>} ></Route>

      </Routes>
      

    </Router>

    </div>
  );
}

export default App;

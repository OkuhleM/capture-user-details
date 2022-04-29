import './App.css';
import UserDetails from './Components/UserDetails';
import ListWithNames from './Components/ListWithNames';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
     {/* <UserDetails /><br/>
     <ListWithNames /> */}

     <Router>
     <Routes>
       <Route path="/" element={<UserDetails />} />
       <Route path="/listwithnames" element={<ListWithNames />} />
  
     </Routes>
   </Router>
    </div>
  );
}

export default App;

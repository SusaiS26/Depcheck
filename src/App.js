import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newpage from './Newpage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/New' element={<Newpage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardHome from './components/BoardHome';
import BoardDetail from './components/BoardDetail';
import BoardSubmit from './components/BoardSubmit';
import BoardUpdate from './components/BoardUpdate';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<BoardHome/>} />
            <Route path='/detail/:id' element={<BoardDetail/>} />
            <Route path='/detail/:id/update' element={<BoardUpdate/>} />
            <Route path='/submit' element={<BoardSubmit />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;

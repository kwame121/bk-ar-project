import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Start from './components/Start';
import 'antd/dist/antd.css';
import ThreeD from './components/ThreeD';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/ar-app" element={<Main/>}/>
            <Route path="/3d-app" element={<ThreeD/>}/>
            <Route exact path="/" element={<Start/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

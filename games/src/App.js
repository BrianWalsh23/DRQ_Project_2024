import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.js';
import Content from './components/Content';
import View from './components/view.js';
import Add from './components/add.js';
import Edit from './components/edit.js';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/home" element={<Content/>} />
        <Route path="/view" element={<h1><View/></h1>} />
        <Route path="/add" element={<h1><Add/></h1>} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
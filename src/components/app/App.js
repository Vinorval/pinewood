import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" />
        <Route path="/projects" />
        <Route path="/service" />
        <Route path="/company" />
        <Route path="/contact" />
        <Route path="/project" />
        <Route path="/price" />
        <Route path="*" />
      </Routes>
    </div>
  );
}

export default App;

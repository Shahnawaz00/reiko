import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/hompage/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;

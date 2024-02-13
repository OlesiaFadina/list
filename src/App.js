
import './App.css';
import { ToList } from './ToList';
import image from './list.jpg';
import imageTwo from './word.jpg';

function App() {
  return (
    <div className="App">
      <img src={ image } width='305px' alt='list'/>
      <h1>Today</h1>
      <ToList/>
      <img src={ imageTwo } width='312px' alt='word'/>
    </div>
  );
}

export default App;

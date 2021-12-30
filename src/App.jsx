import './App.css'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className="App">
      <Counter initialState={{ count: 0 }} />
    </div>
  );
 };
 
export default App

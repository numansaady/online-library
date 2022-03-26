import './App.css';
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Library from './components/Library/Library';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Library></Library>
      <Faq></Faq>
    </div>
  );
}

export default App;

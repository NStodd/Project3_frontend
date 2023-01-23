import logo from './logo.svg';
import Index from './pages/Index';
import Create from './pages/Create';
import Update from './pages/Update';
import Show from './pages/Show';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <Create />
      <Update />
      <Show />
    </div>
  );
}

export default App;

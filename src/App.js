import './App.css';
import MyAppBar from './components/appbar/AppBar';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;

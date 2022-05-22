import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Views from './views/Views';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Views />
      </div>
      <Footer />
    </div>
  );
}

export default App;
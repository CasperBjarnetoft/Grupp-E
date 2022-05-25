import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Views from './views/Views';
import { useDispatch } from 'react-redux'
import { checkUser } from './store/actions/authAction';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />

      <div className='container height'>
        <Views />
      </div>
      <Footer />
    </div>
  );
}

export default App;
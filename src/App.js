import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants/:id" element={<RestaurantDetails/>}/>
          </Routes>
        </Container>

      </main>

    </Router>
  );
}

export default App;



//life cycle mthods
//1.mounting ---componentDidMount() 
//2.updating ---componentDidUpdate() 
//3.unmounting ---componentWillUnmounting 

//params
//dynamically changed contents in url--(unique id)
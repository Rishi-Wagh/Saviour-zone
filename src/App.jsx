
import { Routes , Route} from 'react-router-dom';
import Loginpage from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Organization from './Pages/Organization/Organization';
import Home from './Pages/Home/Home';
import Top from './Navigation/TopNav/Top';

function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<Top />} >
        <Route path='/' element={<Home />} />
      </Route>
        <Route path='/login' element={<Loginpage />} />
        <Route path='/org' element={<Organization />} />
        <Route path='/register' element={<Register />} />
    </Routes>
    
      
        
    </>
  )
}

export default App

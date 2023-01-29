import Login from './components/Login'
import Expenses from './components/Expense';
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    // <Login />
    <>
    <Routes>
       <Route path="/expenses" element={<Expenses/>} />
       <Route path="" element={<Login/>} />
    </Routes >   

    </>

  );
}

export default App;

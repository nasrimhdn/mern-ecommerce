import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import{BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';


const App = () => {

  // const user1 = false;
const user1 = useSelector((state) => state.user1.currentUser1 );
console.log(user1  );


const user11 = useSelector((state) => state);
console.log(user11);



  return ( 
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart/" element={<Cart/>}/>
        <Route path="/login/" element={<Login/>} />
        {/* <Route path="/login/" element={user1 ? <Navigate to ="/"/> : <Login/>}/> */}
        <Route path="/register/" element={<Register/>}/>
        {/* <Route path="/register/" element={user1 ? <Navigate to ="/"/> : <Register/>}/> */}
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
 


  )
};

export default App;
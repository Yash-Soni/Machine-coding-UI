import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
import Navbar from './components/Navbar';
import OrderSummary from './pages/order-summary';
import FeaturedProducts from './pages/FeaturedProducts';
import NewProducts from './pages/NewProducts';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Products from './pages/products';
import RequireAuth from './pages/RequireAuth';
import Users from './pages/users';
import UserDetails from './pages/userDetails';
import Login from './pages/Login';
import { AuthProvider } from './pages/auth';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='login' element={<Login />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HomePage from './components/SplashPage';
import User from './components/UserProfilePage';
import { authenticate } from './store/session';
import Footer from './components/Footer';
import ProductListPage from './components/ProductListPage';
import ProductsByCategory from './components/ProductListPage/ProductsByCategory';
import ProductDetailPage from './components/ProductDetailpage';
import UserProductList from './components/UserProductList';
import AddProductForm from './components/ProductForm/AddProductForm';
import EditProductForm from './components/ProductForm/EditProductForm';
import ShoppingCartPage from './components/ShoppingCartPage';
import OrderHistoryPage from './components/OrderHistoryPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/products' exact={true} >
          <ProductListPage />
        </Route>
        <Route path='/products/categories/:category'>
          <ProductsByCategory />
        </Route>
        <Route path='/products/:id' exact={true}>
          <ProductDetailPage />
        </Route>
        <ProtectedRoute path='/users/:userId/products'>
          <UserProductList />
        </ProtectedRoute>
        <ProtectedRoute path='/products/:id/edit'>
          <EditProductForm />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/new-products' exact={true} >
          <AddProductForm />
        </ProtectedRoute>
        <ProtectedRoute path='/cart' exact={true} >
          <ShoppingCartPage />
        </ProtectedRoute>
        <ProtectedRoute path='/orders' exact={true} >
          <OrderHistoryPage />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

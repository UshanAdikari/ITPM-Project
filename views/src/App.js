import "font-awesome/css/font-awesome.min.css";
import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Page404 from "./components/404";
import AllProducts from "./components/AllProducts";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import ContactUs from "./components/ContactUs";
import GeneralSpinner from "./components/GeneralSpinner";
import MainFooter from "./components/MainFooter";
import MainNavbar from "./components/MainNavbar";
import ScrollToTop from "./components/ScrollToTop";
import SingleProduct from "./components/SingleProduct";
import AccountSettings from "./components/account-settings/AccountSettings";
import AddAddressForm from "./components/account-settings/AddAddressForm";
import Addresses from "./components/account-settings/Addresses";
import EditAccountForm from "./components/account-settings/EditAccountForm";
import EditAddressForm from "./components/account-settings/EditAddressForm";
import OrdersHistory from "./components/account-settings/OrdersHistory";
import WishList from "./components/account-settings/WishList";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/cart/CheckOut";
import AddCategoryForm from "./components/dashboard/AddCategoryForm";
import AddProductForm from "./components/dashboard/AddProductForm";
import AllAdminsList from "./components/dashboard/AllAdminsList";
import AllShippersList from "./components/dashboard/AllShippersList";
import AllUsersPermissions from "./components/dashboard/AllUsersPermissions";
import Dashboard from "./components/dashboard/Dashboard";
import DeliveredOrders from "./components/dashboard/DeliveredOrders";
import EditCategories from "./components/dashboard/EditCategories";
import EditProducts from "./components/dashboard/EditProducts";
import OrdersToDeliver from "./components/dashboard/OrdersToDeliver";
import OrdersToShip from "./components/dashboard/OrdersToShip";
import ShippedOrders from "./components/dashboard/ShippedOrders";
import HomePage from "./components/home-page/HomePage";
import LoginForm from "./components/login&signup/LoginForm";
import SignUpForm from "./components/login&signup/SignUpForm";
import { loadUser } from "./redux/actions/auth-actions/loadUser";
import "./style/index.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // load our user everytime we render
    dispatch(loadUser());
  }, [dispatch]);

  const { user, loading, auth } = useSelector(state => state.userrr);

  // this method to control 404 not found page
  const generateRoute = (path, compt) => {
    if (user && auth.isCustomer && !loading) {
      return <Route path={path} component={compt} exact />;
    } else if (loading) {
      return <Route path={path} component={GeneralSpinner} exact />;
    } else if ((!user && !auth.customer, !loading)) {
      return <Route path={path} component={Page404} exact />;
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <div className='App'>
        <MainNavbar />
        <div className='page-body'>
          <Switch>
            {/* Public Routes */}
            <Route path='/' component={HomePage} exact />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/product/:id' component={SingleProduct} />
            <Route path='/categories' component={Categories} />
            <Route path='/products' component={AllProducts} />
            <Route path='/category/:id' component={CategoryProducts} />
            <Route path='/contactus' component={ContactUs} />

            {/* Account settings Routes */}
            {generateRoute("/settings", AccountSettings)}
            {generateRoute("/settings/edit_account", EditAccountForm)}
            {generateRoute("/my_orders", OrdersHistory)}
            {generateRoute("/my_addresses", Addresses)}
            {generateRoute("/my_addresses/add_address", AddAddressForm)}
            {generateRoute("/my_addresses/edit_address", EditAddressForm)}
            {generateRoute("/wish_list", WishList)}

            {/* Admin Dashboard  Routes */}
            {generateRoute("/dashboard", Dashboard)}
            {generateRoute("/addCategory", AddCategoryForm)}
            {generateRoute("/editCategories", EditCategories)}
            {generateRoute("/permissions", AllUsersPermissions)}
            {generateRoute("/dashboard/admin/admins_permissions", AllAdminsList)}
            {generateRoute("/dashboard/admin/shippers_permissions", AllShippersList)}

            {/* Seller Dashboard  Routes */}
            {generateRoute("/addProduct", AddProductForm)}
            {generateRoute("/editProducts", EditProducts)}
            {generateRoute("/dashboard/seller/orders_to_ship", OrdersToShip)}
            {generateRoute("/dashboard/seller/shipped_orders", ShippedOrders)}

            {/* Shipper Dashboard  Routes */}
            {generateRoute("/dashboard/shipper/orders_to_deliver", OrdersToDeliver)}
            {generateRoute("/dashboard/shipper/delivered_orders", DeliveredOrders)}

            {/* Cart Routes */}
            {generateRoute("/cart", Cart)}
            {generateRoute("/checkout", CheckOut)}

            {/* if no match just render 404 not found page */}
            <Route component={Page404} />
          </Switch>
        </div>
        <MainFooter />
      </div>
    </Router>
  );
}

export default App;

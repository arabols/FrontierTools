import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import LoadingIndicator from '../common/loadingIndicator';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from '../../features/home/home';
import Quotify from '../../features/quotify/quotify';
import Renderer from '../../features/renderer/renderer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  //Ideas for tools in the app
  //add toaster messages for errors
  //Home Page
  // display weather info
  //sun up sun down info
  //make a todo applet
  //show date and all to do for that date
  //add function with popup
  //edit function with modal popup
  //delete function
  //complete function (disables item)
  //make api to hold to do


  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotify' element={<Quotify />} />
        <Route path='/renderer' element={<Renderer />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

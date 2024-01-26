import './style.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}
  from 'react-router-dom';

import { Routes } from 'react-router-dom';

//import pages
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutSection from './components/about';
import ClassSection from './components/classes';
import Resources from './components/resources';
import Testimonial from './components/testimonials';
import Location from './components/location';
import Footer from './components/footer';
import Signup from './components/signup';
import Home from './components/pages/Home';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/portal" element={<Signup/>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


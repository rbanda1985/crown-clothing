import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Contact from './routes/contact/Contact.js';
import Home from './routes/home/home.components.jsx'
import Navigation from './routes/navigation/navigation.component.jsx';
import Shop from './routes/shop/Shop.js';
import SignIn from './routes/sign-in/SignIn.js';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App;

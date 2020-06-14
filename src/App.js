import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

 const menuItem=[
 

      {menu:"home"},
      {menu:"about us"},
      {menu:"Services"},
      {menu:"Contacts"}
];
 



  const App = () => (<ol>
     {menuItem.map((items)=>
     (<li>
       {items.menu}
     </li>))}
              
  </ol>
  )
export default App;

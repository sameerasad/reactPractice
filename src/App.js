import React from 'react';



class App extends React.Component{
  render() {
    const menus=[
      { menu: "home" },
      { menu: "about us" },
      { menu: "Services" },
      { menu: "Contacts" }
    ];

    return (<ul id ="nav" >
      {menus.map((items) =>
        (<li>
          {items.menu}
        </li>))}

    </ul>
    )
    
  }
}

 export default App;

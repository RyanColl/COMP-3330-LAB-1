
import './App.css';
import IPhone from '../IPhone/IPhone'
function App() {
  const width = window.innerWidth;
  return (
    <div className="App-body" style={{width: width}}>
      <header className="App-header">
          <IPhone />
      </header> 
    </div>
  );
}

export default App;

// import './App.css';

// function App() {
//   var salut = "Hello ";
//   var name = "World";
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p> {salut + name} </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;









// import logo from './logo.svg';
// import './App.css';
// import Book from './Book.js'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Book title="React Book #1" price="36.32" pic="https://images-na.ssl-images-amazon.com/images/I/41+WkW8xuAS._SX384_BO1,204,203,200_.jpg"/>
//         <Book title="React Book #2" price="21.26" pic="https://images-na.ssl-images-amazon.com/images/I/41TyrX3WG0L._SX331_BO1,204,203,200_.jpg"/>
//         <Book title="React Book #3" price="45.99" pic="https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX404_BO1,204,203,200_.jpg"/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

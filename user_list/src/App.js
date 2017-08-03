import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App =  (props)=>{
  return(
      <div className="divstyle">
          <img className="imgstyle" src={props.avatar_url}/>
          <div className="maindiv">
          <div className="namediv">{props.name}</div>
          <div>{props.Company}</div>
      </div>
      </div>
    )
};



let data = [
    {
        name:"mojombo",
        avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",
        Company:"Facebook"
    },
    {
        name:"defunkt",
        avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4",
        Company:"Twitter"
    },
    {
        name:"pjhyett",
        avatar_url:"https://avatars0.githubusercontent.com/u/3?v=4",
        Company:"Google"
    }
];


const cardlist = (props)=>{
    return(
        <div>
            <App name="mojombo"
                avatar_url="https://avatars0.githubusercontent.com/u/1?v=4"
            Company="Facebook"/>



        </div>
    )
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//           <h1>
//               <card/>
//           </h1>
//       </div>
//     );
//   }
// }



export default cardlist;

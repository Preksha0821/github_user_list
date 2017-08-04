import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

//Card function for rendering data of user
const Card = (props) => {
        return(
            <div className="divstyle">
                <img className="imgstyle" src={props. avatar_url}/>
                <div className="maindiv">
                    <div className="namediv">{props.name}</div>
                    <div>{props.Company}</div>
                </div>
            </div>
        );
}

//Data array for storing information of users.
let data = [
    {
        name: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        Company: "Facebook"
    },
    {
        name: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        Company: "Twitter"
    },
    {
        name: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        Company: "Google"
    },
    {
        name: "wycats",
        avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4s",
        Company: "Instagram"
    }
];

//Cardlist function for looping through the data array
const Cardlist = (props) => {
    return (
        <div>
            <div>
                {props.cards.map(card => <Card {...card}/>)}
            </div>
        </div>
    );
};
//class Form created to add a new card of the user
class Form extends React.Component{
    render(){
        return(
        <form>
            <input type="text" placeholder="Github user"/>
            <button type="submit">Add card</button>
        </form>
        );
    }
}
//class App created to call the form and cardlist in single class
class App extends React.Component{
    render(){
        return(
            <div>
                <Form/>
                <Cardlist cards={data}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

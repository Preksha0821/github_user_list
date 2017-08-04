import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';


//Card function for rendering data of user
const Card = (props) => {
    return (
        <div className="divstyle">
            <img className="imgstyle" src={props.avatar_url} alt="profile"/>
            <div className="maindiv">
                <div className="namediv">{props.name}</div>
                <div>{props.Company}</div>
            </div>
        </div>
    );
}


//Cardlist function for looping through the data array
const Cardlist = (props) => {
    return (
        <div>
            <div>
                {props.cards.map(card => <Card key={card.id} {...card}/>)}
            </div>
        </div>
    );
};
//class Form created to add a new card of the user
class Form extends React.Component {
    state = {userName: ''}
    //handlesubmit function to submit userdata on click
    handleSubmit = (event) => {
        event.preventDefault();

        //axios will fetch the data from url and get an object
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({userName: ''});
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName}
                       onChange={(event) => this.setState({userName: event.target.value})} placeholder="Github user"
                       required="required"/>
                <button type="submit">Add card</button>
            </form>
        );
    }
}
//class App created to call the form and cardlist in single class
class App extends React.Component {
    state = {
        //Data array for storing information of users.
        data: []
    };

    //addnewcard function to get the previous state and concat it.
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            data: prevState.data.concat(cardInfo)
        }))
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <Cardlist cards={this.state.data}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

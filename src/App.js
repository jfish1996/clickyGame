import React, {Component} from 'react';
import './App.css';
import Card from './components/ColorCard';
import Header from './components/Header';
import cards from "./cards.json";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards:cards,

    score: 0,

    clicked: []
  };

  

handleOnClick = (id) => {

  let clickedArray = this.state.clicked


      //if the id of image just clicked on is in the clicked array, minus one off of score and then empty clicked array
    if(clickedArray.indexOf(id) > -1){

      this.setState({

        clicked : [],

        score : 0
        

      })
      console.log("Score is down one", this.state.score)
      alert("try again!")
      this.state.cards.sort(() => Math.random() - 0.5)
      
    } else {
      this.handleWin()
      let newState = {...this.state};
      
      newState.score++;
      newState.clicked.push(id)

      this.setState(newState)
      console.log("Score is up one", this.state.score)
      this.state.cards.sort(() => Math.random() - 0.5)
    
      

      
    }
    

  };

  handleWin = () => {
    // var winCondition = (this.state.score === 12)
    if(this.state.score === 12){
      alert("You did it!")
      this.setState({
        clicked: [],
        score: 0
      });
    }

  };

  render(){

    return (
      
      <div>
        <Header score={this.state.score}/>
        <div id="container">
        <br></br>
        {this.state.cards.map( card =>  <Card key ={card.id} clickHandle={()=>this.handleOnClick(card.id)} id={card.id} image={card.image}/>)}
        </div>
    </div>)
  }
}
export default App;
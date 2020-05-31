import React, { Component }  from 'react';

import { CardList } from './components/card-list/card-list.components';

import { SearchBox } from './components/search-box/search-box.components';

import './App.css';


class App extends Component {

  constructor () {
    super();
    this.state = {
        monsters : [],
        searchField : ''
    }
  }

  componentDidMount(){
    // fetch api for monsters data
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => {this.setState({ monsters : users})});
  }


  handleChange = (e) => {
    // use arrow functions in order to set the context of this
    this.setState({searchField : e.target.value})
  }

  render () {
    
    // duplicate data from the state in order to keep the raw data clean and untouched
    const { monsters, searchField } = this.state;

    // filter out all monsters who have the searched keyword
    const filteredMonster = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
        {
          <div>
            <h1> Monster Rolodex </h1>
            <SearchBox 
              placeholder="Search the monster"
              handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonster}/>
          </div>
          
        }
      </div>
    );    
  } 
}


export default App;

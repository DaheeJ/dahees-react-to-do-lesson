import React, { Component } from 'react';
import './list-container.css';
import ToDoItem from '../stateless/to-do-item';

class ListContainer extends Component {

  constructor(){
    super();
    this.state = {
      toDos:[],
      addingNewToDo: false
    };
    this.makeToDo = this.makeToDo.bind(this);
    this.renderToDos = this.renderToDos.bind(this);
    this.showInput = this. showInput.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.deleteByIndex = this.deleteByIndex.bind(this);
    this.markCheckbox = this.markCheckbox.bind(this);
  }

  markCheckbox(indexOfToDoToDelete){
    let oldToDos = this.state.toDos[indexOfToDoToDelete];
    oldToDos.isDone = !oldToDos.isDone;
    let newState = this.state.toDos;
    newState[indexOfToDoToDelete] = oldToDos;

    this.setState({
      toDos: newState
    })
  }

  deleteByIndex(indexOfToDoToDelete){
    let oldToDos = this.state.toDos;
    oldToDos.splice(indexOfToDoToDelete,1);
    console.log(oldToDos,'oldtodoss')
    this.setState(
      {
        toDos: oldToDos
      }
    )

  }

  onChangeHandler(e){
  this.setState({text: e.target.value})
  }

  showInput(){
    this.setState({
      addingNewToDo: !this.state.addingNewToDo
    })
  }

  makeToDo(){
    const toDo = {
      label: this.state.text,
      isDone: false
    };
  let currentToDos = this.state.toDos;
  console.log('old todos',currentToDos);
  currentToDos.push(toDo);
  this.setState({
      toDos: currentToDos,
      addingNewToDo: false
    });
  }
  renderToDos(){
    return this.state.toDos.map(
      (aToDo, index) => {
        const setCheckbox = () => this.markCheckbox(index);
        const deleteToDo = () => this.deleteByIndex(index);
       
        return(
        <ToDoItem info={aToDo} 
        deleteFunction={deleteToDo} 
        setCheckboxFunction={setCheckbox} 
        key={Math.random()}
        />)
      }
    )
  }
  render() {
    console.log("state",this.state);
    
    return (
      <div className="list-container">
      <button onClick={this.showInput}>Add Task</button>
      {
        this.state.addingNewToDo &&<div className="add-lable">
      
        <h3>
          To-Do Lavel
        </h3>
        <input className="label-input-text" onChange={this.onChangeHandler} type='text' />
        <button onClick={this.makeToDo}>Save</button>
         
      </div>}
      {
            this.renderToDos()
          }
      </div>
    );
  }
}

export default ListContainer;

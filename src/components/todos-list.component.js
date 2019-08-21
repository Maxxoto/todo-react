import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Todo = props =>(
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link className="btn btn-primary" to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component{
  
    
    constructor(props){
        super(props);
        this.state = {todos: []};
    }
    
    componentDidMount(){
        axios.get('https://evening-badlands-83186.herokuapp.com/todos/')
        .then(response => {
            this.setState({ todos:response.data });
        })
        .catch(function(error){
            console.log(error);
        })
    }

    todoList() {
    // if(this.props.data){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    // }

    }


    render(){
        return (
            <div className="container">
            <h3 className="text-center">Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.todoList() }
                </tbody>
            </table>
        </div>
        );
    }
}
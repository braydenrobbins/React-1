import React, { Component } from 'react';
import Todo from './todo';

// const TodoList = (props) => {
//     console.log(props.todos);
//     return(
//         <>
//             <ul>
//                 { props.todos.map(todo => <li key={todo}>{ todo }</li>) } 
//             </ul>
//         </>
//     );
// };

class TodoList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            todos: [
                'walk the dog',
                'walk the cat', 
                'water the plants'
            ],
            inputValue: 'Carson'
        }
    };

    render() {

        return (
            <>
                <form onSubmit={event=> {
                    event.preventDefault();
                
                    this.setState(prevState => ({
                        inputValue: '',
                        todos: [...prevState.todos, prevState.inputValue]
                    }));
                }}>
                <div className='form-group'>
                    <input type='text' 
                    className="form-control"
                    value={this.state.inputValue} 
                    onChange={event => this.setState({inputValue: event.target.value})}
                    />
                    <p>{this.state.inputValue}</p>
                </div>
                </form>
                <ul className="list-group">
                    { this.state.todos.map(todo => <Todo key={todo} todo={todo} />) } 
                </ul>
            </>
        )
    }
}
export default TodoList;
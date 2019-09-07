import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
    )
}

const App = () => {
    const name = 'Peter';
    const age = 10;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={'Pedro'} age={10 + 5}/>
            <Hello name={name} age={age} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

import React, {Component} from 'react';

class HelloWorld extends Component {

    state = {
        who: 'World'
    }

    worldClick = () => {
        this.setState({
            who: 'World'
        })
    }
    friendClick = () => {
        this.setState({
            who: 'Friend'
        })
    }
    reactClick = () => {
        this.setState({
            who: 'React'
        })
    }

    render(){
        return (
            <div>
            <p>Hello,{this.state.who}</p>
            <button onClick={this.worldClick}>World</button>
            <button onClick={this.friendClick}>Friend</button>
            <button onClick={this.reactClick}>React</button>
            </div>
        );
    }
}

export default HelloWorld;
import React, {Component} from 'react';

class RouletteGun extends Component{
    constructor(props){
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    spinning = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            let randomNum = Math.ceil(Math.random() * 8);
            console.log(randomNum);
            console.log(this.props.bulletInChamber + ' bullet in chamber')
            this.setState({
                chamber: randomNum,
                spinningTheChamber: false
            })
         },2000)
    }

    display() {
        if (this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger!'
        } else if (this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!!'
        } else {
            return "You're safe!"
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    
    
    render(){
        return (
            <div>
            <p>{this.display()}</p>
            <button onClick={this.spinning}>Pull the trigger!</button>
            </div>
        );
    }
}

export default RouletteGun;
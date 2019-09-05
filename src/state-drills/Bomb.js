import React, {Component} from 'react';

class Bomb extends Component {

    state = {
        count: 0
    }

    componentDidMount(){

        this.setState({
            count: this.state.count + 1
        })

        let interval = setInterval(timer(), 1000);

        function timer() {
            

            console.log(count);
            if (count % 2 === 0){
                return count = 'tick';
            } else if (count % 2 !== 0){
                return count = 'tock'
            } else if (count >= 8) {
                return count = 'BOOM!!!'
            } else {
                return this.state.setState({
                    count: this.state.count + 1
                })
            }
        }

    }

    render(){

        return(
            <div>
                <p>{this.state.count}</p>
            </div>
        )
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Bomb;
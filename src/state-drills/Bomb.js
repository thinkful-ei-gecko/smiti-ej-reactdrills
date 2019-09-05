import React, {Component} from 'react';

class Bomb extends Component{

    state ={
        count: 0,
    };

    let interval = setInterval(time, 1000)

    display()
    {
        const {count} = this.state
        if(count % 2 === 0)
        {
            return 'tick'
        }
        else if(count % 2 != 0)
        {
            return 'tock'
        }
        else if (count >= 8){
            clearInterval(this.interval)
            return 'BOOM!!!'
        }
    }

    render(){

        return(
            <div>
                <p>{this.state.display()}</p>
            </div>
        )
    }
}
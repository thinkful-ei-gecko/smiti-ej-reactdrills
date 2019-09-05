import React, {Component} from 'react';

class Bomb extends Component {

    state = {
        count: 0
    }

    componentDidMount(){
<<<<<<< HEAD

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

=======
        this.interval = setInterval(() => {
            // eslint-disable-next-line
            this.setState({
                count: this.state.count + 1
            })
            
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }




    display()
    {
        const {count} = this.state
        if (count >= 8){
            clearInterval(this.interval)
            return 'BOOM!!!'
        }
        else if(count % 2 === 0)
        {
            return 'tick'
        }
        else
        {
            return 'tock'
        }
        
        
>>>>>>> fa710154ca5969dd71a8d4d45fabf86be55878a4
    }

    render(){

        return(
            <div>
<<<<<<< HEAD
=======
                <p>{this.display()}</p>
>>>>>>> fa710154ca5969dd71a8d4d45fabf86be55878a4
                <p>{this.state.count}</p>
            </div>
        )
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Bomb;
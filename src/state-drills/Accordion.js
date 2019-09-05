import React, {Component} from 'react';

class Accordion extends Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
    
    }

    static defaultProps = {
        sections: [],
    };

    


    liSection = ()=>{
        this.props.map(sections=> )
    }

    render(){
        
        const {sections} = this.props
        return(
            <ul>
                <li>
                    <button 
                    onClick= {this.liSection}>{this.props.title}</button>
                </li>
                

            </ul>
        )
    }


}

export default Accordion;
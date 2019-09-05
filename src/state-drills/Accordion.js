import React, {Component} from 'react';
import cuid from 'cuid';

class Accordion extends Component{

    static defaultProps = {
        sections: [],
    };

    state = {
        currentSection: 0
    };

    handleButtonClicked(index) {
        this.setState({
            currentSection: index
        })
    }

    render(){
        console.log(this.state.currentSection);
        const buttons = this.props.sections.map((section, index) => {

        let id = cuid()

        if (this.state.currentSection === index) {
            return (
            <li key={id}>
                <button onClick={() => this.handleButtonClicked(index)}>{section.title}</button>
                <p>{section.content}</p>
            </li>
            );
        }

        return (
            <li key={id}>
                <button onClick={() => this.handleButtonClicked(index)}>{section.title}</button>
            </li>
        )})

        return (
            <ul>
            {buttons}
            </ul>
        )
    }


}

export default Accordion;
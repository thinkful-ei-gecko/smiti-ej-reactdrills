import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import Sections from './Sections';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion  sections={[{}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders with empty li', () => {
    let wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders no sections as active by default', () => {
    let wrapper = shallow(<Accordion sections={Sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('the component opens a clicked section', () => {
    let wrapper = shallow(<Accordion sections={Sections} />);
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('opens the last section when multiple sectionns have been clicked', () => {
    let wrapper = shallow(<Accordion sections={Sections} />);
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
});
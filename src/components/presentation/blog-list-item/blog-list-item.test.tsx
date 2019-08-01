import React from "react";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BlogListItem from './blog-list-item';

configure({ adapter: new Adapter() });

describe("<BlogListItem/> Blog list item component",()=>{

    it('should render properly',()=>{
        const component = shallow(<BlogListItem />)
        // console.log(component.debug());
        const wrapper = component.find('.blog-item-wrapper');
        expect(wrapper.length).toBe(1);
    });

});
import React from "react";
import {shallow, ShallowWrapper} from 'enzyme';
import FsHeader from './header';
import '../../../setupTests';

/**
 * Setup function to run before each unit test
 * @param props props for the component
 */
const setUp = (props={}):ShallowWrapper<typeof FsHeader>=> {
    const component = shallow(<FsHeader {...props}/>);
    return component;
}

/**
 * Utility function to check the existence of a DOM based on a special attribute - data-test-attr
 * This is because testing dom based on className , Id or Tag can be lead to a problem as it can be
 * changed by other developers because they might not notice that its being used in test. 
 * Hence adding special attribute will make it clear that its being used in testing.
 * 
 * @param component 
 * @param attr Special attr to notify its being used in testing
 */
const findDomByTestAttr = (component:ShallowWrapper<typeof FsHeader>, attr:string) => {
    const wrapper = component.find(`[data-test-attr='${ attr }']`);
    return wrapper;
}

describe("<FsHeader/> Header Component testing",()=>{
    
    let component:ShallowWrapper<typeof FsHeader>;
    
    beforeEach(()=>{
       component = setUp();
    })

    it('should render properly',()=>{
        const wrapper = findDomByTestAttr(component,'blog-title');
        expect(wrapper.length).toBe(1);
    });

});
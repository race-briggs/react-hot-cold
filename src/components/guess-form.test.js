import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe(<GuessForm/>, () => {
	it('should render without crashing', () => {
		shallow(<GuessForm/>);
	})

	it('should fire the onMakeGuess callback when submitted', () => {
		const callback = jest.fn();
		const value = 7;
		const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
		wrapper.find('input[type="number"]').instance().value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value.toString());
	});

	it('should reset the input when submitted', () => {
		const wrapper = mount(<GuessForm/>);
		const input = wrapper.find('input[type="number"]');
		input.instance().value = 7;
		wrapper.simulate('submit');
		expect(input.instance().value).toEqual('');
	});
});
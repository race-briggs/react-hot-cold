import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe(<GuessCount/>, () => {
	it('should render without crashing', () => {
		shallow(<GuessCount/>);
	});

	it('should render the correct guess count', () => {
		let test_count = 7;
		const wrapper = shallow(<GuessCount guessCount={test_count}/>);
		expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
	});

})
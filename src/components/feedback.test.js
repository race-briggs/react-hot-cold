import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback/>', () => {
	it('should render without crashing', () => {
		shallow(<Feedback/>);
	});

	it('Renders feedback', () => {
		let test_feedback = 'Game feedback';

		let wrapper = shallow(<Feedback feedback={test_feedback}/>);
		expect(wrapper.contains(test_feedback)).toEqual(true);
	})
})
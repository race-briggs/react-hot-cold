import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection/>', () => {

	it('should render without crashing', () => {
		shallow(<GuessSection/>);
	});

});
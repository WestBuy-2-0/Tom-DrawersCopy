import React from 'react';
import App from '../client/src/components/App.jsx';
import renderer from 'react-test-renderer';
// import TestRunner from 'jest-runner';

test('App renders h2 subtitle on page load', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
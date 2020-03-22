import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TheDate from './TheDate'

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  //We are telling Jest to skip this unit test because the time changes with every render obviously as seconds go by and a snapshot is useless in this sense.
  it.skip('renders the UI as expected', () => {
    expect(
      renderer.create(<TheDate />).toJSON()
    ).toMatchSnapshot()
  })
})
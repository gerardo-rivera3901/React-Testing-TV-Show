import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'
import { testShowData } from '../App.test'

test('renders without errors', () => {
  render(<Episodes episodes={[]}/>)
})

test("rerenders with a new episodes prop", () =>{
  const {queryAllByTestId, rerender} = render (<Episodes episodes={[]} />)

  expect(queryAllByTestId("episode")).toStrictEqual([]);
  expect(queryAllByTestId("episode")).toHaveLength(0);

  rerender(<Episodes episodes={testShowData} />)

  expect(queryAllByTestId("episode")).toHaveLength(1);
});
import { render } from '@testing-library/react'
import HomePage from '../../src/pages'

test('should match snapshot', function () {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})

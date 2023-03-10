import { fireEvent, screen, render, waitForElement } from '@testing-library/react'
import ReactDOM from 'react-dom'
import App from './App'

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
})

/**
 * 
 test('home works as expected', async () => {
	const {container} = render(<App />)
	const gifLink = await waitForElement(() => container.querySelector('.Gif-link'))
	expect(gifLink).toBeVisible()
  })
 */

test('search form could be used', async () => {
	render(<App />)
	const input = await screen.findByRole('textbox')
	const button = await screen.findByRole('button')

	fireEvent.change(input,{ target: { value: 'Matrix' }})
	fireEvent.click(button)

	const title = await screen.findByText('Matrix')
	expect(title).toBeInTheDocument()
})
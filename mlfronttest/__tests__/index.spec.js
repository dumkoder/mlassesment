import { render, screen, fireEvent } from '@testing-library/react'
import Index from '../pages/index'

describe('Initial page' , () => {

    let renderPage 
    let input
    beforeEach(()=>{
        renderPage = render(<Index/>)
        input = renderPage.getByPlaceholderText('Nunca dejes de buscar')
    })

    it('Should render input field on main page', () =>{
        expect(input).toBeTruthy()
    })
    
    it('Should Update input values', () =>{
        fireEvent.change(input, { target: { value: 'mockValue' } })
        expect(input.value).toBe('mockValue')
    })
})
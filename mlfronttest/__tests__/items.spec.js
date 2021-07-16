import Items, {getServerSideProps} from '../pages/items'
import { render, screen, waitFor } from '@testing-library/react'
import { mockedItems } from '../__mocks__/mocks';

describe('Render Page Items',  () => {
  beforeEach( async ()=>{
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({mockedItems})}))
    await getServerSideProps({query: { search: "mockText" }});
  })
  
  test('should get Items form props', async () => {
    const comp = render(<Items results={mockedItems}/>)

    expect(comp).toMatchSnapshot()
      
  });
});
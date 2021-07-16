import { rest } from 'msw';

import { mockedItems } from '../__mocks__/mocks'

const API_URL = 'http://localhost:8080/api/items'
const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    return res(ctx.json(mockedItems));
  }),
];

export { handlers };

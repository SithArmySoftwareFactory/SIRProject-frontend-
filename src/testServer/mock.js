// src/mocks.js
import {rest} from 'msw'
import {setupServer} from "msw/node";

const mock = setupServer(
    rest.get('http://localhost:3001/movies', (req, res, ctx) => {
        return res(
            ctx.json([{}]),
        )
    }),
)
// Register the Service Worker and enable the mocking
export default mock;
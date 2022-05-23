import { findAllByRole, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import mock from "./testServer/mock";

describe("Integration tests",()=> {
  beforeAll(() => mock.listen());
  afterEach(() => mock.resetHandlers());
  afterAll(() => mock.close());

  it("should test something",()=>{

  })
});

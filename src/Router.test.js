import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe('TEST APP', () => {
    test('Router test', () => {
        render(<MemoryRouter>
            <App />
        </MemoryRouter>);
    })
})
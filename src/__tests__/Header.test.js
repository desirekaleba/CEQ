import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from "../components/Header/Header";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders the Header", () => {
    act(() => {
        render(<Header />, container);
    });
    expect(container.textContent).toBe("Charepquo");
});
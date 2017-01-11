// Importing react and enzyme into the test
// issues with using import
import app from '../src/index';
import React from 'react';
import { mount } from 'enzyme';

describe('When component renders the text of the app', () => {
    it('should show test', () => {
        const app = { id: 1, done: false, name: "hello, I'm Elliot" };
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const p = wrapper.find('content__about h1');
        expect(p.text()).toBe("hello, I'm Elliot");
    });
});
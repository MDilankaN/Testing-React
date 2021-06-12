import Form from '..'
import { getByTestId, render } from '@testing-library/react'

let container = null;

describe ( 'Testing Index file that contain a form', () => {
    beforeEach (() => {
        container  = render(<Form/>).container;
    })

    it('should render form tag' , () => {
        expect(getByTestId(container ,'form-tag')).toBeTruthy();
    });

    it('should render Title' , () => {
        expect(getByTestId(container ,'title-field')).toBeTruthy();
        expect(getByTestId(container, 'title-field').textContent).toBe('Test Input Form');
    });

    it('should render Input field' , () => {
        expect(getByTestId(container ,'input-field')).toBeTruthy();
    });

    it('should render Submit button' , () => {
        expect(getByTestId(container ,'submit-btn')).toBeTruthy();
    });
});


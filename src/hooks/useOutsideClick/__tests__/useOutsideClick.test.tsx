import React from 'react';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Demo} from './Demo';

test('Check useOutsideClick correct work', async () => {
    render(<Demo />);

    expect(screen.getByRole('heading')).toHaveTextContent('0');

    await userEvent.click(screen.getByText('Target'));

    expect(screen.getByRole('heading')).toHaveTextContent('1');

    await userEvent.click(screen.getByText('Outside'));

    expect(screen.getByRole('heading')).toHaveTextContent('0');
});

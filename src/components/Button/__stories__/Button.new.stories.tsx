import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, ButtonProps} from '../Button';
import Docs from './Button.docs.mdx';

export default {
    title: 'Components/Basic/Button',
    id: 'components/Button',
    component: Button,
    parameters: {
        order: -100,
        docs: {
            page: Docs,
        },
    },
} as Meta;

export const Playground: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;
Playground.storyName = 'Button';

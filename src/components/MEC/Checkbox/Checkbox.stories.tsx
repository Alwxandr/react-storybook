import React from 'react';

import { Checkbox } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Basic Elements /Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  demension: 'M',
  disabled: false,
  onChange: (e) => console.log(111),
  label: 'Label',
  additionalText: 'Additional text',
};

export const WithBadge = Template.bind({});

WithBadge.args = {
  demension: 'S',
  disabled: false,
  onChange: (e) => console.log(111),
  label: (
    <>
      {/* Label <Badge symbol={'!'} /> */}
    </>
  ),
  additionalText: 'Additional text',
};

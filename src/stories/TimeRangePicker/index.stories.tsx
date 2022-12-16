import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/TimeRangePicker',
  component: Component,
  argTypes: {
    startTime: {
      control: { type: 'string' },
      defaultValue: ''
    },
    endTime: {
      control: { type: 'string' },
      defaultValue: ''
    },
    onChange: {
      action: 'onChange'
    },
    error: {
      control: { type: 'string' },
      defaultValue: ''
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

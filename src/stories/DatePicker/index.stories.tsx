import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/DatePicker',
  component: Component,
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: ''
    },
    onChange: {
      action: 'onChange'
    },
    format: {
      control: { type: 'text' },
      defaultValue: 'YYYY.MM.DD'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

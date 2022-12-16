import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Switch',
  component: Component,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    onChange: {
      action: 'onChange'
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

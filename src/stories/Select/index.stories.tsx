import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Select',
  component: Component,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    error: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

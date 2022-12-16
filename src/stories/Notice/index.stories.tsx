import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Notice',
  component: Component,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'info', 'warn', 'danger']
    },
    content: {
      control: { type: 'text' },
      defaultValue: 'Notice'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

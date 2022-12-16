import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Backdrop',
  component: Component,
  argTypes: {
    loading: {
      control: { type: 'boolean', defaultValue: false },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

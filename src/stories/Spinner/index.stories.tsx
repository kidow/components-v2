import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Spinner',
  component: Component,
  argTypes: {
    className: {
      description: 'currentValue : `h-5 w-5` (tailwindcss)'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

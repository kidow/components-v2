import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/AutoComplete',
  component: Component,
  argTypes: {
    options: {
      control: { type: 'object' },
      defaultValue: [
        'Apple',
        'Google',
        'Meta',
        'Amazon',
        'Microsoft',
        'Netflix',
        'Tesla'
      ]
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

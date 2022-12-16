import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Dropdown',
  component: Component,
  argTypes: {
    list: {
      control: { type: 'object' },
      defaultValue: ['Apple', 'Microsoft', 'Tesla']
    },
    onClick: {
      action: 'onClick'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Dropdown'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

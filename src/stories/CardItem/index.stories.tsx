import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Card',
  component: Component,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '라벨'
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    plain: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Item: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

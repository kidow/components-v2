import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/Rating',
  component: Component,
  rgTypes: {
    value: {
      control: { type: 'number', min: 0, max: 10 },
      defaultValue: 0
    },
    onChange: {
      action: 'onChange'
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    half: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    count: {
      control: { type: 'number', min: 0, max: 10 },
      defaultValue: 5
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

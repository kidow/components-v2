import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entry/ColorPicker',
  component: Component,
  argTypes: {
    value: {
      control: { type: 'text' },
      defaultValue: '#3047ec'
    },
    onChange: {
      action: 'onChange'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

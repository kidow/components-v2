import Component from '.'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Inputs/ButtonGroup',
  component: Component,
  argTypes: {
    onClick: {
      action: 'onClick'
    },
    list: {
      control: { type: 'object' },
      defaultValue: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

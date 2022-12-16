import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Drawer',
  component: Component,
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    position: {
      control: { type: 'radio' },
      defaultValue: 'left',
      options: ['top', 'right', 'bottom', 'left']
    },
    onClose: {
      action: 'onClose'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

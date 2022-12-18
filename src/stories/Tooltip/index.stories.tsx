import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Component,
  argTypes: {
    content: {
      control: { type: 'string' },
      defaultValue: 'content'
    },
    position: {
      control: { type: 'radio' },
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'top'
    },
    arrow: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <div className="flex h-24 items-center justify-center">
    <Component {...props}>
      <span>Tooltip</span>
    </Component>
  </div>
)

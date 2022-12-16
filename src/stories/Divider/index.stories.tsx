import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Divider',
  component: Component,
  argTypes: {
    mode: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      defaultValue: 'horizontal'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

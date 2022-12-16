import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Display/Image',
  component: Component,
  argTypes: {
    src: {
      control: { type: 'text' },
      defaultValue: 'https://i.pravatar.cc'
    }
  }
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

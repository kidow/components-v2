import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Inputs/Button',
  component: Component
} as ComponentMeta<typeof Component>

export const Group: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Toast',
  component: Component
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

import Component from '.'
import type { ComponentStory } from '@storybook/react'

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <Component {...props} />
)

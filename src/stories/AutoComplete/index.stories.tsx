import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data Entrry',
  component: Component
} as ComponentMeta<typeof Component>

export const AutoComplete: ComponentStory<typeof Component> = ({
  ...props
}) => <Component {...props} />

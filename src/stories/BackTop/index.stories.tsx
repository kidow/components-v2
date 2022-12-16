import Component from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/BackTop',
  component: Component
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = ({ ...props }) => (
  <>
    <div>
      {Array.from({ length: 50 }, (_, key) => (
        <h1 key={key}>{`Heading ${key + 1}`}</h1>
      ))}
    </div>
    <Component {...props} />
  </>
)

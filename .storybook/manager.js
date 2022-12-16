import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

window.STORYBOOK_GA_ID = 'G-3VHNBFM0PK'
window.STORYBOOK_REACT_GA_OPTIONS = {}

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Kidow',
    brandUrl: 'https://components.kidow.me',
    brandImage: 'https://files.kidow.me/logos/storybook.svg',
    brandTarget: '_blank'
  })
})

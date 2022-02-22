import * as NextImage from 'next/image'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Layout from '~components/layout/Layout'
import 'focus-visible'
import 'modern-normalize/modern-normalize.css'
import '~styles/theme.css'
import '~styles/helpers.css'
import '~styles/global.css'

// Disable optimization for next/image to fix component into Storybook context:
// https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  options: {
    storySort: {
      order: ['Theme', 'Common', 'Layout'],
    },
  },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    values: [
      { name: 'primary', value: 'hsl(0, 100%, 50%)' },
      { name: 'black', value: 'hsl(0, 0%, 0%)' },
      { name: 'grey-50', value: 'hsl(0, 0%, 50%)' },
      { name: 'white', value: 'hsl(0, 0%, 100%)' },
    ],
    grid: {
      cellSize: 4,
    },
  },
}

const withLayout = Story => (
  <Layout>
    <Story />
  </Layout>
)
export const decorators = [withLayout]

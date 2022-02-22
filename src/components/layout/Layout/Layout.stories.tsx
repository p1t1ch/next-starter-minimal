import { Meta, Story } from '@storybook/react'
import Layout, { LayoutProps } from '.'

export default {
  title: 'Layout/Layout',
  component: Layout,
} as Meta<LayoutProps>

const Template: Story<LayoutProps> = args => <Layout {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Page content',
}
Primary.storyName = 'Layout'

import { Meta, Story } from '@storybook/react'
import ExternalLink, { ExternalLinkProps } from '.'

export default {
  title: 'Common/ExternalLink',
  component: ExternalLink,
} as Meta<ExternalLinkProps>

const Template: Story<ExternalLinkProps> = args => <ExternalLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  href: 'https://google.com',
  children: 'Go to google.com',
}
Primary.storyName = 'ExternalLink'

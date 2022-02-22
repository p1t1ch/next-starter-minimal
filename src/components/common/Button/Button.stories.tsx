import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Common/Button',
  component: Button,
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  variant: 'default',
  size: 'default',
  rounded: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'md',
  rounded: 'md',
}

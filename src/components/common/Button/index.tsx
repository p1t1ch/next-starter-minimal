import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'primary'
  size?: 'default' | 'md'
  rounded?: 'default' | 'md' | 'full'
}

function Button({
  variant = 'default',
  size = 'default',
  rounded = 'default',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        styles.root,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        styles[`rounded-${rounded}`],
        className
      )}
      {...props}
    />
  )
}

export default Button

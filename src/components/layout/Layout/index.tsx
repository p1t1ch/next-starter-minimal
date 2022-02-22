import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'
import styles from './Layout.module.css'

export type LayoutProps = ComponentPropsWithoutRef<'div'>

function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div className={cn(styles.root, className)} {...props}>
      <main>{children}</main>
    </div>
  )
}

export default Layout

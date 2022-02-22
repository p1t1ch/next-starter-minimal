import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'
import styles from './ExternalLink.module.css'

export type ExternalLinkProps = ComponentPropsWithoutRef<'a'>

function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="nofollow noopener noreferrer" className={cn(styles.root, className)} {...props}>
      {children}
    </a>
  )
}

export default ExternalLink

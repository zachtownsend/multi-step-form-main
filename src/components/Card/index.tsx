import type { HTMLAttributes, ReactNode } from 'react'

export type CardProps = {
  title?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export function Card({ title, children, className, style, ...rest }: CardProps) {
  return (
    <div
      className={className}
      style={{
        padding: '1.5rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--colors-white, #ffffff)',
        boxShadow: '0 0.25rem 1.5rem rgba(0, 0, 0, 0.08)',
        ...style,
      }}
      {...rest}
    >
      {title ? (
        <h2
          style={{
            margin: '0 0 1rem',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--colors-blue-950, #022959)',
          }}
        >
          {title}
        </h2>
      ) : null}
      {children}
    </div>
  )
}

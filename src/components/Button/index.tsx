import type { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
  variant = 'primary',
  type = 'button',
  style,
  ...rest
}: ButtonProps) {
  const variantStyles =
    variant === 'primary'
      ? {
          backgroundColor: 'var(--colors-blue-950, #022959)',
          color: 'var(--colors-white, #ffffff)',
          border: 'none',
        }
      : {
          backgroundColor: 'transparent',
          color: 'var(--colors-grey-500, #9699aa)',
          border: '1px solid var(--colors-purple-200, #d6d9e6)',
        }

  return (
    <button
      type={type}
      style={{
        padding: '0.75rem 1.25rem',
        borderRadius: '0.5rem',
        font: 'inherit',
        fontWeight: 500,
        cursor: 'pointer',
        ...variantStyles,
        ...style,
      }}
      {...rest}
    />
  )
}

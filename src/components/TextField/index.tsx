import type { ComponentProps } from 'react'

export type TextFieldProps = Omit<ComponentProps<'input'>, 'id'> & {
  id: string
  label: string
  errorMessage?: string
}

export function TextField({
  id,
  label,
  errorMessage,
  className,
  'aria-describedby': ariaDescribedBy,
  ...inputProps
}: TextFieldProps) {
  const errorId = errorMessage ? `${id}-error` : undefined
  const describedBy =
    [ariaDescribedBy, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      <label htmlFor={id} style={{ fontSize: '0.875rem', fontWeight: 500 }}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={errorMessage ? true : undefined}
        aria-describedby={describedBy}
        style={{
          padding: '0.625rem 0.75rem',
          borderRadius: '0.5rem',
          border: `1px solid ${errorMessage ? 'var(--colors-red-500, #ee374a)' : 'var(--colors-purple-200, #d6d9e6)'}`,
          font: 'inherit',
        }}
        {...inputProps}
      />
      {errorMessage ? (
        <p
          id={errorId}
          role="alert"
          style={{
            margin: 0,
            fontSize: '0.875rem',
            color: 'var(--colors-red-500, #ee374a)',
          }}
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

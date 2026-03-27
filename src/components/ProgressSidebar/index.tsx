import type { HTMLAttributes } from 'react'

export type ProgressStep = {
  id: string
  label: string
}

export type ProgressSidebarProps = {
  steps: ProgressStep[]
  currentStepIndex: number
} & HTMLAttributes<HTMLElement>

export function ProgressSidebar({
  steps,
  currentStepIndex,
  className,
  ...rest
}: ProgressSidebarProps) {
  return (
    <nav aria-label="Form progress" className={className} {...rest}>
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {steps.map((step, index) => {
          const isCurrent = index === currentStepIndex
          const stepNumber = index + 1
          return (
            <li
              key={step.id}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span
                aria-hidden
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  ...(isCurrent
                    ? {
                        backgroundColor: 'var(--colors-blue-200, #bee2fd)',
                        borderColor: 'var(--colors-blue-700, #164a8a)',
                        color: 'var(--colors-blue-950, #022959)',
                      }
                    : {
                        backgroundColor: 'transparent',
                        borderColor: 'var(--colors-grey-500, #9699aa)',
                        color: 'var(--colors-grey-500, #9699aa)',
                      }),
                }}
              >
                {stepNumber}
              </span>
              <span
                aria-current={isCurrent ? 'step' : undefined}
                style={{
                  fontWeight: isCurrent ? 600 : 400,
                  color: isCurrent
                    ? 'var(--colors-blue-950, #022959)'
                    : 'var(--colors-grey-500, #9699aa)',
                }}
              >
                {step.label}
              </span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

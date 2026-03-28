import type { HTMLAttributes } from 'react'
import StepItem from './StepItem'
import clsx from 'clsx'
import styles from './ProgressSidebar.module.css'

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
    <nav aria-label="Form progress" className={clsx(styles.root, className)} {...rest}>
      <ol
        className={styles.stepList}
      >
        {steps.map((step, index) => {
          const isCurrent = index <= currentStepIndex
          const stepNumber = index + 1
          return (
            <StepItem key={step.id} step={stepNumber} label={step.label} isCurrent={isCurrent} />
          )
        })}
      </ol>
    </nav>
  )
}

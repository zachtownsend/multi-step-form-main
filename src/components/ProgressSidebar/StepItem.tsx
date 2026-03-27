import clsx from 'clsx'
import styles from './StepItem.module.css'

interface StepItemProps {
    step: number
    label: string
    isCurrent: boolean
}
const StepItem = ({ step, label, isCurrent }: StepItemProps) => {
    return (
        <li className={styles.stepItem}>
            <span aria-hidden="true" className={clsx(styles.stepNumber, isCurrent && styles.active)}>
                <span>{step}</span>
            </span>
            <span className={styles.stepLabel}>Step {step}</span>
            <span className={styles.stepLabelText}>{label}</span>
            
        </li>
    )
}

export default StepItem
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressSidebar } from './index'

const steps = [
  { id: '1', label: 'Your info' },
  { id: '2', label: 'Select plan' },
  { id: '3', label: 'Add-ons' },
  { id: '4', label: 'Summary' },
]

const meta = {
  title: 'Components/ProgressSidebar',
  component: ProgressSidebar,
  tags: ['autodocs'],
  args: {
    steps,
    currentStepIndex: 0,
  },
} satisfies Meta<typeof ProgressSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const StepTwo: Story = {
  args: {
    currentStepIndex: 1,
  },
}

export const LastStep: Story = {
  args: {
    currentStepIndex: 3,
  },
}

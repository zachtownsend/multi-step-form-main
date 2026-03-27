import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from './index'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Personal info',
    children: (
      <p style={{ margin: 0, color: 'var(--colors-grey-500, #9699aa)' }}>
        Please provide your name, email address, and phone number.
      </p>
    ),
  },
}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    children: (
      <p style={{ margin: 0 }}>Content only — no heading.</p>
    ),
  },
}

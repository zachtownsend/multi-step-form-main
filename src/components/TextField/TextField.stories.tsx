import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextField } from './index'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    id: 'name',
    label: 'Name',
    name: 'name',
    placeholder: 'e.g. Stephen King',
    autoComplete: 'name',
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    id: 'email',
    label: 'Email address',
    name: 'email',
    type: 'email',
    defaultValue: '',
    errorMessage: 'This field is required',
  },
}

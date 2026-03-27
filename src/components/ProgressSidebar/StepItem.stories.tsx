import type { Meta, StoryObj } from '@storybook/react-vite'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'

import StepItem from './StepItem'
import '../../styles/tokens.css'

const purpleCanvas = {
  backgroundColor: 'var(--colors-purple-600)',
  minHeight: '100vh',
  boxSizing: 'border-box' as const,
  padding: '1.5rem',
}

const meta = {
  title: 'Components/ProgressSidebar/StepItem',
  component: StepItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <div style={purpleCanvas}>
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
          <Story />
        </ol>
      </div>
    ),
  ],
  args: {
    step: 1,
    label: 'Your info',
    isCurrent: true,
  },
} satisfies Meta<typeof StepItem>

export default meta
type Story = StoryObj<typeof meta>

/** Desktop viewport. Use the viewport toolbar or Mobile / Tablet stories for other sizes. */
export const Default: Story = {
  globals: {
    viewport: { value: 'desktop' },

  },
  args: {
    isCurrent: false,
  },
}

export const DesktopActive: Story = {
  ...Default,
    args: {
        isCurrent: true,
    },
}

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobile1' },
  },
  args: {
    isCurrent: false,
  },
}

export const MobileActive: Story = {
  ...Mobile,
    args: {
        isCurrent: true,
    },
}

export const Tablet: Story = {
  globals: {
    viewport: { value: 'tablet' },
  },
  args: {
    isCurrent: false,
  },
}

export const TabletActive: Story = {
  ...Tablet,
    args: {
        isCurrent: true,
    },
}
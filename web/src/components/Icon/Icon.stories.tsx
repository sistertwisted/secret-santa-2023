import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Calendar: Story = {
  args: {
    id: 'calendar',
    size: 42,
  },
}

export const Check: Story = {
  args: {
    id: 'check',
    size: 42,
  },
}

export const Chevron: Story = {
  args: {
    id: 'chevron',
    size: 42,
  },
}

export const Close: Story = {
  args: {
    id: 'close',
    size: 42,
  },
}

export const Edit: Story = {
  args: {
    id: 'edit',
    size: 42,
  },
}

export const EyeClosed: Story = {
  args: {
    id: 'eyeClosed',
    size: 42,
  },
}

export const EyeOpened: Story = {
  args: {
    id: 'eyeOpened',
    size: 42,
  },
}

export const Logout: Story = {
  args: {
    id: 'logout',
    size: 42,
  },
}

export const Minus: Story = {
  args: {
    id: 'minus',
    size: 42,
  },
}

export const Plus: Story = {
  args: {
    id: 'plus',
    size: 42,
  },
}

export const Question: Story = {
  args: {
    id: 'question',
    size: 42,
  },
}

export const ThumbsDown: Story = {
  args: {
    id: 'thumbsDown',
    size: 42,
  },
}

export const ThumbsUp: Story = {
  args: {
    id: 'thumbsUp',
    size: 42,
  },
}

export const Upload: Story = {
  args: {
    id: 'upload',
    size: 42,
  },
}

export const User: Story = {
  args: {
    id: 'user',
    size: 42,
  },
}

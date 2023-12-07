// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const AvatarWithHat: Story = {
  args: {
    image: 'avatar-01',
    withHat: true,
  },
}

export const AvatarWithoutHat: Story = {
  args: {
    image: 'avatar-01',
  },
}

export const IconAvatar: Story = {
  args: {
    icon: 'eyeOpened',
  },
}

export const AvatarWithIndicator: Story = {
  args: {
    image: 'avatar-04',
    userStatus: 'invited',
  },
}

export const InitialAvatar: Story = {
  args: {
    letter: 'B',
  },
}

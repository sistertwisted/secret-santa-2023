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

import BgAuth from './BgAuth'

const meta: Meta<typeof BgAuth> = {
  component: BgAuth,
}

export default meta

type Story = StoryObj<typeof BgAuth>

export const Primary: Story = {}

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

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Name: Story = {
  args: {
    type: 'text',
    placeholder: 'Name',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
}

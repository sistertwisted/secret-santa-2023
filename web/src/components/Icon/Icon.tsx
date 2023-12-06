import { FC } from 'react'

type TProps = {
  id: string
  size?: number
}

const Icon: FC<TProps> = ({ id, size = 24 }) => (
  <svg width={size} height={size}>
    <use href={`/icons/sprite.svg#${id}`} />
  </svg>
)

export default Icon

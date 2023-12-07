import { FC } from 'react'

type TProps = {
  id: string
  size?: number
  fill?: string
}

const Icon: FC<TProps> = ({ id, size = 24, fill = 'black' }) => (
  <svg width={size} height={size} fill={fill}>
    <use href={`/icons/sprite.svg#${id}`} />
  </svg>
)

export default Icon

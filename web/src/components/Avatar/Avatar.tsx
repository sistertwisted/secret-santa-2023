import { FC } from 'react'

import Icon from '../Icon/Icon'

type TProps = {
  image?: string
  icon?: string
  letter?: string
  userStatus?: 'accepted' | 'declined' | 'invited'
  withHat: boolean
}

const Avatar: FC<TProps> = ({
  image,
  icon,
  letter,
  userStatus,
  withHat = false,
}) => (
  <div className="relative">
    <div className="flex h-21 w-21 items-center justify-center rounded-full border-6 border-white bg-spanishGreen">
      {!!image && (
        <img
          className="h-17 w-17 rounded-full"
          src={`/avatars/${image}.png`}
          alt={image}
        />
      )}
      {!!icon && <Icon id={icon} fill="white" />}
      {withHat && (
        <img
          className="absolute -top-6 left-7"
          src="/img/santa-hat.png"
          alt=""
        />
      )}
      {!!userStatus && (
        <img
          className="absolute bottom-1 left-16"
          src={`/indicators/${userStatus}.svg`}
          alt=""
        />
      )}
      {!!letter && <p className="text-avatar font-bold text-white">{letter}</p>}
    </div>
  </div>
)

export default Avatar

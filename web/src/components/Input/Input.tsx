import { FC, useState } from 'react'

import Icon from '../Icon/Icon'

type TProps = {
  type: 'password' | 'text' | 'email'
  placeholder: string
}

const Input: FC<TProps> = ({ type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword((value) => !value)

  return (
    <div className="relative">
      <label>{placeholder}</label>
      <input type={showPassword ? 'text' : type} placeholder="" />
      {type === 'password' && (
        <div onClick={handleShowPassword} className="absolute right-9 top-9">
          <Icon id={showPassword ? 'eyeOpened' : 'eyeClosed'} size={32} />
        </div>
      )}
    </div>
  )
}

export default Input

import { FC, useState } from 'react'

import Icon from '../Icon/Icon'

type TProps = {
  type: 'password' | 'text' | 'email'
  placeholder: string
  onChange: (value) => void
}

const Input: FC<TProps> = ({ type, placeholder, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword((value) => !value)

  return (
    <div className="relative">
      <label>{placeholder}</label>
      <input
        type={showPassword ? 'text' : type}
        placeholder=""
        name={type}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {type === 'password' && (
        <div onClick={handleShowPassword} className="absolute right-9 top-9">
          <Icon id={showPassword ? 'eyeOpened' : 'eyeClosed'} size={32} />
        </div>
      )}
    </div>
  )
}

export default Input

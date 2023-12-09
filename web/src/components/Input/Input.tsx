import { FC } from 'react'

type TProps = {
  type: string
  placeholder: string
}

const Input: FC<TProps> = ({ type, placeholder }) => {
  return (
    <div className="relative mb-6">
      <input type={type} className="sm:text-md peer block bg-white p-8" />
      <p className="absolute left-8 top-6 font-handwriting text-3xl font-bold uppercase transition-all peer-focus:left-2 peer-focus:top-1 peer-focus:text-lg peer-active:left-2 peer-active:top-1 peer-active:text-lg">
        {placeholder}
      </p>
    </div>
  )
}

export default Input

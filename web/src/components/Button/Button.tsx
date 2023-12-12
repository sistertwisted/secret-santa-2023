const Button = ({ children, type }) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className="w-full rounded-full bg-supernova p-4 pb-3"
    >
      <p className="font-handwriting text-3xl uppercase leading-[50px]">
        {children}
      </p>
    </button>
  )
}

export default Button

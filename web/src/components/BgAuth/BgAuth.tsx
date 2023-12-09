const BgAuth = ({ children }) => {
  return (
    <main className="h-screen w-full">
      <div className="h-full w-full bg-silverTree bg-auth-pattern bg-contain bg-no-repeat 2xl:bg-cover">
        {children}
      </div>
    </main>
  )
}

export default BgAuth

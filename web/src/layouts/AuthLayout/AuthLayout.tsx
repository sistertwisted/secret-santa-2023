type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-w-screen min-h-screen bg-silverTree bg-auth-pattern bg-[length:1440px_auto] bg-[center_top] bg-no-repeat px-4 dark:bg-nileBlue min-[1440px]:bg-[length:100%_auto]">
      <img
        className="mx-auto mb-12 w-[460px] pt-[40px]"
        src="/img/logo.svg"
        alt="Secret Santa"
      />
      {children}
    </main>
  )
}

export default AuthLayout

import LoginForm from './components/LoginForm'

function LoginPage() {
  return (
    <div className="login_page ">
      <h3 className="heading-primary text-center mb-5">Welcome User</h3>
      <div className="login-form max-w-[300px] mx-auto">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage

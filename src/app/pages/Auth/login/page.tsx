import Footer from './components/Footer'
import LoginForm from './components/LoginForm'

//import Slider from '@/components/Slider'
import POSBG from '@/assets/img/pos-bg.png'
function LoginPage() {
  return (
    <>
      {/* Image Section */}
      <div className="h-full bg-cover bg-center relative backdrop-blur-md " style={{ backgroundImage: `url(${POSBG})` }}>
        <img src={POSBG} className="h-full object-contain absolute z-20 " alt="" />
      </div>
      {/* Main Content */}
      <div className="grid  place-content-center">
        <div className="bg-white h-auto py-14 px-8 w-[400px] shadow-md ">
          <h3 className="text-2xl font-bold mb-10">Welcome User</h3>
          <div className="login-form">
            <LoginForm />
          </div>
        </div>

        {/* Footer at the Bottom */}
        <Footer />
      </div>
    </>
  )
}

export default LoginPage

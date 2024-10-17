import UserBox from './components/UserBox'
import { Hamburger } from '@/assets/icons'
import useSidebar from '@/store/useSidebar'
function Header() {
  const toggleSidebar = useSidebar((state) => state.toggleSidebar)
  return (
    <header className="border-b border-gray-100 ">
      <div className="py-3 px-4">
        <div className="flex justify-between items-start">
          <div className="logo-box flex items-start gap-4  ">
            <span onClick={() => toggleSidebar()} className="mt-1.5 cursor-pointer">
              <Hamburger />
            </span>
            <h2 tabIndex={1} className="header-title flex flex-col">
              Point OF Sale
              <span className="text-[10px] font-semibold  ">(#2142124242)</span>
            </h2>
          </div>
          <UserBox />
        </div>
      </div>
    </header>
  )
}

export default Header

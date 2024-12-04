import { Outlet } from "react-router-dom"

function UserManagementLayout() {
  return (
    <div className="usermanagement_layout px-4 py-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">User Management</h2>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default UserManagementLayout
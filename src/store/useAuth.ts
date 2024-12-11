import { create } from 'zustand'

// Define the user interface to strongly type the user data
interface User {
  id: string
  username: string
  email: string
  password: string,
  role: string
}

// Define the state interface for the Zustand store
interface AuthState {
  user: User | null // The user can either be a User object or null (if not logged in)
  login: ({ username, password }: { username: string; password: string }) => string | User // Return an error message or the User object
  logout: () => void // Logout function to clear the user
  changePassword: () => void
  initializeUser: () => void // Initialize user from localStorage
}

// Mock users data for client-side authentication
export const usersData: User[] = [
  {
    id: '1313',
    username: 'rickzi',
    email: 'td0o3232@gmail.com',
    password: 'Haldiram?008',
    role: 'Storemanager',
  },
  {
    id: '1343',
    username: 'rickzi2',
    email: 'td0o3232@gmail.com',
    password: 'Haldiram?008',
    role: 'Cashier',
  },
  {
    id: '13eee3',
    username: 'rickzi3',
    email: 'td0o3232@gmail.com',
    password: 'Haldiram?008',
    role: 'Admin',
  },
]

// Create Zustand store with TypeScript support
const useAuth = create<AuthState>((set) => ({
  user: null, // Initially no user is logged in
  // Login function that finds the user in the usersData array
  login: ({ username, password }: { username: string; password: string }) => {
    // Try to find the user based on the username and password
    const user = usersData.find((item) => item.username === username && item.password === password)

    if (!user) {
      return 'Invalid username or password' // Return error message if credentials don't match
    }

    // Save the user in the Zustand store
    set({ user })

    // Save the user in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(user))

    return user // Return the user object if login is successful
  },

  // Logout function to clear the user from both store and localStorage
  logout: () => {
    set({ user: null })
    localStorage.removeItem('user')
  },

  
  // Change Password function call here 
   changePassword() {
    //set({})
    window.location.href = "http://localhost:5173/administration/security/change-password"
  },

  // Initialize user from localStorage
  initializeUser: () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      set({ user: JSON.parse(savedUser) })
    }
  },
}))

export default useAuth

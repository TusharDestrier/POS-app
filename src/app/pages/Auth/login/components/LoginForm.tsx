import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/schema/auth.schema'
import { useAuth } from '@/store/useAuth'

function LoginForm() {
  const [isShow, setShow] = useState(false)
  const login = useAuth((state) => state.login)
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const res = login({ username: values.username, password: values.password })

    if (typeof res === 'string') {
      toast.error(`Invalid username or password`, {
        style: {
          backgroundColor: '#f7edeb',
          color: '#ff6242',
        },
      })
    } else {
      toast.success(`Login Successfully`, {
        style: {
          backgroundColor: '#e3ffea',
          color: '#3ed665',
        },
      })
      navigate('/dashboard')

    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" autoComplete="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isShow ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Password"
                    {...field}
                  />
                  <span
                    onClick={() => setShow((prev) => !prev)}
                    className="absolute right-3 top-2  cursor-pointer"
                  >
                    {isShow ? <Eye size={16} /> : <EyeOff size={16} />}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-end ">
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm

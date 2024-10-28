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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import useAuth from '@/store/useAuth'
import { toast } from 'sonner'
import { loginSchema } from '@/schema/auth.schema'

function LoginForm() {
  const login = useAuth((state) => state.login)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const res = login(values)
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
                <Input placeholder="Username" {...field} />
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
                <Input placeholder="Password" {...field} />
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

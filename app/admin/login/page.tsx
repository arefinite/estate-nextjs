'use client'
import Image from 'next/image'
import loginImage from '@/public/login-image.jpg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Key } from 'lucide-react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  return (
    <div className='w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen'>
      <div className='hidden bg-muted lg:block'>
        <Image
          src={loginImage}
          alt='Image'
          className='h-full w-full object-cover grayscale-[30%]'
        />
      </div>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold flex items-center justify-center gap-1'>
              <span>
                <Key color='red' />
              </span>
              <span>Admin Login</span>
            </h1>
            <p className='text-balance text-sm text-muted-foreground'>
              Provide your correct credentials
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='test@admin.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input
                id='password'
                type='password'
                placeholder='*******'
                required
              />
            </div>
            <Button
              onClick={() => router.push('/admin/dashboard')}
              type='submit'
              className='w-full'
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import SitePath from '@/components/shared/SitePath'

const formSchema = z
  .object({
    previousPassword: z.string().min(5, {
      message: 'Previous password is required and at least 5 characters long',
    }),
    newPassword: z.string().min(5, {
      message: 'New password is required and at least 5 characters long',
    }),
    confirmPassword: z.string().min(5, {
      message: 'Confirm password is required and at least 5 characters long',
    }),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

const SettingPage = () => {
  const [showPreviousPassword, setShowPreviousPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      previousPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section>
      <SitePath items={false} currentPage='Settings' />

      <div className='mt-6'>
        <h1 className='text-lg font-semibold md:text-2xl'>Change Password</h1>
      </div>
      <div
        className='p-4 mt-4 rounded-lg border border-dashed shadow-sm'
        x-chunk='dashboard-02-chunk-1'
      >
        <div className='w-full md:w-[420px]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='previousPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type={showPreviousPassword ? 'text' : 'password'}
                          placeholder='Enter previous password'
                          {...field}
                        />
                        <button
                          type='button'
                          className='absolute inset-y-0 right-0 px-3 flex items-center'
                          onClick={() =>
                            setShowPreviousPassword(!showPreviousPassword)
                          }
                        >
                          {showPreviousPassword ? (
                            <EyeOff className='h-5 w-5' />
                          ) : (
                            <Eye className='h-5 w-5' />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='newPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type={showNewPassword ? 'text' : 'password'}
                          placeholder='Enter new password'
                          {...field}
                        />
                        <button
                          type='button'
                          className='absolute inset-y-0 right-0 px-3 flex items-center'
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className='h-5 w-5' />
                          ) : (
                            <Eye className='h-5 w-5' />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder='Confirm new password'
                          {...field}
                        />
                        <button
                          type='button'
                          className='absolute inset-y-0 right-0 px-3 flex items-center'
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className='h-5 w-5' />
                          ) : (
                            <Eye className='h-5 w-5' />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Change Password</Button>
            </form>
          </Form>
        </div>{' '}
      </div>
    </section>
  )
}

export default SettingPage

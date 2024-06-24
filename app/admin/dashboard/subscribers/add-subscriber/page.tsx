'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState, ChangeEvent } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Link from 'next/link'
import SitePath from '@/components/shared/SitePath'

const formSchema = z.object({
  name: z.string().min(5, {
    message: 'Name is required and must be at least 3 characters long',
  }),
  email: z.string().min(5, {
    message: 'Email is required and must be at least 5 characters long',
  }),
})

const AddSubscriberPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <section>
      <SitePath
        items={true}
        prevName='Subscribers'
        prevLink='/admin/dashboard/subscribers'
        currentPage='Add Subscriber'
      />

      <div className='mt-6'>
        <h1 className='text-lg font-semibold md:text-2xl'>Add Subscriber</h1>
      </div>
      <div
        className='p-4 mt-4 rounded-lg border border-dashed shadow-sm'
        x-chunk='dashboard-02-chunk-1'
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col md:flex-row items-center justify-end'>
              <div className='items-center gap-4 hidden md:flex'>
                <Button variant={'outline'} asChild>
                  <span className='ml-2'>
                    <Link href='/admin/dashboard/subscribers'>Go Back</Link>
                  </span>
                </Button>

                <Button type='submit'>
                  <span className='ml-2'>Save</span>
                </Button>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6 py-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        className='w-full'
                        {...field}
                        placeholder='Enter Name'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='email'
                        className='w-full'
                        {...field}
                        placeholder='Enter Email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='flex items-center gap-4 md:hidden mt-4'>
              <Button variant={'outline'} asChild>
                <span>
                  <Link href='/admin/dashboard/subscribers'>Go Back</Link>
                </span>
              </Button>

              <Button type='submit'>
                <span className='ml-2'>Save</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default AddSubscriberPage

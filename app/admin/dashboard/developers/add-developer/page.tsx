'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
import Image from 'next/image'
import SitePath from '@/components/shared/SitePath'
import { Switch } from '@/components/ui/switch'

const formSchema = z.object({
  name: z.string().min(5, {
    message: 'Name is required and must be at least 3 characters long',
  }),
  status: z.boolean(),

  image: z
    .any()
    .refine(file => file && file.length === 1, 'Image is required')
    .transform(file => file[0]),
})

const AddDeveloperPage = () => {
  const [value, setValue] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      status: true,
      
    },
  })

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <section>
      <SitePath
        items={true}
        prevName='Dubai Developers'
        prevLink='/admin/dashboard/developers'
        currentPage='Add Dubai Developer'
      />

      <div className='mt-6'>
        <h1 className='text-lg font-semibold md:text-2xl'>Add Dubai Developer</h1>
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
                    <Link href='/admin/dashboard/developers'>Go Back</Link>
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
                        placeholder='Enter Title'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex items-center gap-4'>
                <p>Active Status:</p>
                <Switch/>
           </div>
            </div>

         

            <div className='flex flex-col md:flex-row pt-6  md:pt-0 items-center gap-4'>
              <FormLabel>Developer Logo:</FormLabel>
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='file'
                        className='w-full'
                        accept='image/*'
                        onChange={e => {
                          handleImageChange(e)
                          field.onChange(e.target.files)
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className='text-sm'>
                (only jpg, jpeg, png formats and max size 10Mb is allowed)
              </p>
            </div>
            <div>
              {imagePreview && (
                <div className='mt-4'>
                  <Image
                    src={imagePreview}
                    height={200}
                    width={300}
                    alt='Image Preview'
                  />
                </div>
              )}
            </div>

            <div className='flex items-center gap-4 md:hidden mt-4'>
              <Button variant={'outline'} asChild>
                <span>
                  <Link href='/admin/dashboard/developers'>Go Back</Link>
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

export default AddDeveloperPage

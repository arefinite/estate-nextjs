

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
import Image from 'next/image'
import SitePath from '@/components/shared/SitePath'

const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title is required and must be at least 3 characters long',
  }),
  description: z.string().min(5, {
    message: 'Description is required and must be at least 5 characters long',
  }),
  meta: z.string().min(5, {
    message:
      'Meta description is required and must be at least 5 characters long',
  }),
  image: z
    .any()
    .refine(file => file && file.length === 1, 'Image is required')
    .transform(file => file[0]),
})

const AddBlogPage = () => {
  const [value, setValue] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      meta: '',
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
        prevName='Blogs'
        prevLink='/admin/dashboard/blogs'
        currentPage='Add Blog'
      />

      <div className='mt-6'>
        <h1 className='text-lg font-semibold md:text-2xl'>Add Blog</h1>
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
                    <Link href='/admin/dashboard/blogs'>Go Back</Link>
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
                name='title'
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

              <FormField
                control={form.control}
                name='meta'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        className='w-full'
                        {...field}
                        placeholder='Enter Meta (SEO) Description'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <ReactQuill
              theme='snow'
              value={value}
              onChange={setValue}
              className='w-full h-64 pb-8 mb-8'
            />

            <div className='flex flex-col md:flex-row pt-6  md:pt-0 items-center gap-4'>
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
                  <Link href='/admin/dashboard/blogs'>Go Back</Link>
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

export default AddBlogPage

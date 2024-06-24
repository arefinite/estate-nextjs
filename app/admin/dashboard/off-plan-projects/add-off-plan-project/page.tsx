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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { useState, ChangeEvent } from 'react'
import 'react-quill/dist/quill.snow.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Link from 'next/link'
import Image from 'next/image'
import SitePath from '@/components/shared/SitePath'
import dynamic from 'next/dynamic'
import { Checkbox } from '@/components/ui/checkbox'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
const amenities = [
  'Swimming Pool',
  'Gym',
  'Parking',
  'Air Conditioning',
  'High-Speed Internet',
  'Jacuzzi',
  'Kids Club',
  'Video Security',
  'Restaurant',
  'Concierge Service',
  'Breakfast',
  'Pets Allowed',
  'Elevator in Building',
  'Free Parking on Premises',
  'Smoking Allowed',
]

const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title is required and must be at least 3 characters long',
  }),
  location: z.string().min(5, {
    message: 'Location is required and must be at least 5 characters long',
  }),
  price: z.string().min(5, {
    message: 'Price is required',
  }),
  handover: z.string().min(5, {
    message:
      'Handover estimation is required and must be at least 5 characters long',
  }),
  property: z.string().min(1, {
    message: 'Property type is required and must be at least 5 characters long',
  }),
  developer: z.string().min(1, {
    message:
      'Developer information is required and must be at least 5 characters long',
  }),
  meta: z.string().min(5, {
    message:
      'Meta description is required and must be at least 5 characters long',
  }),
  image: z
    .any()
    .refine(file => file && file.length === 1, 'Image is required')
    .transform(file => file[0]),
  propertyImages: z
    .any()
    .refine(files => files && files.length > 0, 'At least one image is required')
    .transform(files => Array.from(files)),
})

const AddOffPlanProject = () => {
  const [value, setValue] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [propertyImagesPreview, setPropertyImagesPreview] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      location: '',
      meta: '',
      price: '',
      property: '',
      handover: '',
      developer: '',
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

  const handlePropertyImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const imageUrls = files.map(file => URL.createObjectURL(file))
    setPropertyImagesPreview(imageUrls)
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <section>
      <SitePath
        items={true}
        prevName='Off-Plan Projects'
        prevLink='/admin/dashboard/off-plan-projects'
        currentPage='Add Property'
      />

      <div className='mt-6'>
        <h1 className='text-lg font-semibold md:text-2xl'>Add Off Plan Project</h1>
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
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        className='w-full'
                        {...field}
                        placeholder='Enter Property Location'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='price'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        className='w-full'
                        {...field}
                        placeholder='Enter Price From'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='handover'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='text'
                        className='w-full'
                        {...field}
                        placeholder='Enter Handover Estimation'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='property'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select Property Type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='apartment'>Apartment</SelectItem>
                        <SelectItem value='villa'>Villa</SelectItem>
                        <SelectItem value='townhouse'>Townhouse</SelectItem>
                        <SelectItem value='penthouse'>Penthouse</SelectItem>
                        <SelectItem value='land'>Land Plots</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      You can manage email addresses in your{' '}
                      <Link href='/examples/forms'>email settings</Link>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='developer'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select Developer' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='omniyat'>Omniyat</SelectItem>
                        <SelectItem value='emaar'>Emaar</SelectItem>
                        <SelectItem value='damac'>Damac</SelectItem>
                        <SelectItem value='meraas'>Meraas</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      You can manage email addresses in your{' '}
                      <Link href='/examples/forms'>email settings</Link>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <ReactQuill
              theme='snow'
              value={value}
              placeholder='Property Description Goes Here...'
              onChange={setValue}
              className='w-full h-64 pb-8 mb-8'
            />

            <div className='flex flex-col md:flex-row pt-6 md:pt-0 items-center gap-4'>
              <FormDescription>Floor Plan:</FormDescription>
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

            <div className='flex flex-col md:flex-row pt-6 md:pt-0 items-center gap-4 mt-8'>
              <FormDescription>Property Images:</FormDescription>
              <FormField
                control={form.control}
                name='propertyImages'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='file'
                        className='w-full'
                        accept='image/*'
                        multiple
                        onChange={e => {
                          handlePropertyImagesChange(e)
                          field.onChange(e.target.files)
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className='text-sm'>
                (only jpg, jpeg, png formats and max size 10Mb each is allowed)
              </p>
            </div>
            <div >
              {propertyImagesPreview.length > 0 && (
                <div className='mt-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
                  {propertyImagesPreview.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      height={200}
                      width={300}
                      alt={`Property Image Preview ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

           
            <div className='grid grid-cols-3 gap-4 mt-8'>
              <Input placeholder='nearby location #1' />
              <Input placeholder='nearby location #2' />
              <Input placeholder='nearby location #3' />
              <Input placeholder='nearby location #4' />
              <Input placeholder='nearby location #5' />
              <Input placeholder='nearby location #6' />
              <Input placeholder='nearby location #7' />
              <Input placeholder='nearby location #8' />
              <Input placeholder='nearby location #9' />
            </div>
            <div className='text-muted-foreground mt-8'>
              <span>Amenities</span>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-1 flex-wrap'>
                {amenities.map(amenity => (
                  <div className='flex items-center gap-2 mt-4' key={amenity}>
                    <Checkbox id={amenity} />
                    <label htmlFor={amenity}>{amenity}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
              <Input placeholder='payment plan #1' />
              <Input placeholder='payment plan #2' />
              <Input placeholder='payment plan #3' />
              <Input placeholder='payment plan #4' />
            </div>
          </form>
          <div className='flex items-center gap-4 md:hidden mt-4'>
              <Button variant={'outline'} asChild>
                <span>
                  <Link href='/admin/dashboard/off-plan-projects'>Go Back</Link>
                </span>
              </Button>

              <Button type='submit'>
                <span className='ml-2'>Save</span>
              </Button>
            </div>
        </Form>
      </div>
    </section>
  )
}

export default AddOffPlanProject

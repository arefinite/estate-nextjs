import SitePath from '@/components/shared/SitePath'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
const BlogPage = () => {
  return (
    <section>
      <SitePath items={false} currentPage='Blogs' />

      <div className='mt-6 flex justify-between items-center'>
        <h1 className='text-lg font-semibold md:text-2xl'>Blog List</h1>
        <Link href='/admin/dashboard/blogs/add-blog'>
          <Button className='space-x-2' >
            <span>
              <Plus className='h-5 w-5' />
            </span>
            <span>Add Blog</span>
          </Button>
        </Link>
      </div>
      <div>
        <form>
          <div className='relative my-6'>
            <Search className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search Blogs...'
              className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
            />
          </div>
        </form>
      </div>
      <div
        className='p-4 mt-4 rounded-lg border border-dashed shadow-sm'
        x-chunk='dashboard-02-chunk-1'
      >
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Published Date</TableHead>
                <TableHead className='text-right'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>1</TableCell>
                <TableCell>This is sample blog title</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary'>Update</Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className='inline-block'>
                        <Button variant='destructive'>Delete</Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the data from our server.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>2</TableCell>
                <TableCell>This is sample blog title</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary'>Update</Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className='inline-block'>
                        <Button variant='destructive'>Delete</Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the data from our server.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>3</TableCell>
                <TableCell>This is sample blog title</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary'>Update</Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className='inline-block'>
                        <Button variant='destructive'>Delete</Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the data from our server.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>4</TableCell>
                <TableCell>This is sample blog title</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary'>Update</Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className='inline-block'>
                        <Button variant='destructive'>Delete</Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the data from our server.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>5</TableCell>
                <TableCell>This is sample blog title</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell className='text-right space-x-2'>
                  <Button variant='secondary'>Update</Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className='inline-block'>
                        <Button variant='destructive'>Delete</Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the data from our server.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <Pagination className='flex justify-end mt-8'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  )
}
export default BlogPage

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
const AdminLogs = () => {
  return (
    <section>
      <SitePath items={false} currentPage='Admin Logs' />

      <div className='mt-6'>
        <h1 className='text-lg font-semibold md:text-2xl'>Admin Logs Record</h1>
      </div>
      <div
        className='p-4 mt-4 rounded-lg border border-dashed shadow-sm'
        x-chunk='dashboard-02-chunk-1'
      >
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>SL</TableHead>
                <TableHead>Login ID</TableHead>
                <TableHead>Login Date</TableHead>
                <TableHead>Login Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>1</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell>6:46PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>2</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell>6:46PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>3</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell>6:46PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>4</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell>6:46PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>5</TableCell>
                <TableCell>ADMIN</TableCell>
                <TableCell>20/06/2024</TableCell>
                <TableCell>6:46PM</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
        <div>
          <Pagination className='flex justify-start mt-8'>
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
export default AdminLogs

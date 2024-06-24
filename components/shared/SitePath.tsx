import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

interface SitePathProps {
  items: boolean
  prevLink?: string
  prevName?: string
  currentPage: string
}

const SitePath = ({
  items,
  prevLink,
  prevName,
  currentPage,
}: SitePathProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href='/admin/dashboard'>Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={prevLink}>{prevName}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default SitePath

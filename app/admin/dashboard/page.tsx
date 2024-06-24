import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const DashboardPage = () => {
  return (
    <main>
      <section className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Buy Properties</CardTitle>
            <CardDescription>
             Number of buy properties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>50</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Rented Properties</CardTitle>
            <CardDescription>
             Number of rented properties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>30</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Dubai Projects</CardTitle>
            <CardDescription>
              Number of dubai projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>10</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Dubai Areas</CardTitle>
            <CardDescription>
              Number of dubai areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>40</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Developers</CardTitle>
            <CardDescription>
              Number of developers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>5</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Blogs</CardTitle>
            <CardDescription>
              Number of blogs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>24</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Subscribers</CardTitle>
            <CardDescription>
              Number of subscribers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>20</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Leads</CardTitle>
            <CardDescription>
              Number of leads
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className=' text-4xl font-bold'>122</h1>
          </CardContent>
        </Card>

      </section>
    </main>
  )
}
export default DashboardPage
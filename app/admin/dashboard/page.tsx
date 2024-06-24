'use client'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const DashboardPage = () => {
  // Dummy data (replace with actual data if fetching from an API)
  const [data] = useState([
    { name: 'Buy Properties', count: 50 },
    { name: 'Rented Properties', count: 30 },
  ])

  return (
    <main>
      <section>
        <Card className='col-span-2'>
          <CardHeader>
            <CardTitle>Properties Overview</CardTitle>
          </CardHeader>
          <CardContent className='h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='count' fill='#8884d8' />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>
      <section className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-8'>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Buy Properties</CardTitle>
            <CardDescription>Number of buy properties</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>50</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Rented Properties</CardTitle>
            <CardDescription>Number of rented properties</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>30</h1>
          </CardContent>
        </Card>

        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Dubai Projects</CardTitle>
            <CardDescription>Number of dubai projects</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>10</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Dubai Areas</CardTitle>
            <CardDescription>Number of dubai areas</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>40</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Developers</CardTitle>
            <CardDescription>Number of developers</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>5</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Blogs</CardTitle>
            <CardDescription>Number of blogs</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>24</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Subscribers</CardTitle>
            <CardDescription>Number of subscribers</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>20</h1>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardHeader>
            <CardTitle>Leads</CardTitle>
            <CardDescription>Number of leads</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-4xl font-bold'>122</h1>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default DashboardPage

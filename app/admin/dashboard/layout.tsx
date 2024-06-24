'use client'
import Link from 'next/link'
import {
  Building2,
  CircleUser,
  FileClock,
  Gauge,
  Home,
  Landmark,
  Layers2,
  LineChart,
  Lock,
  Menu,
  Package,
  Rss,
  School,
  Settings,
  ShieldCheck,
  ShoppingCart,
  StickyNote,
  Users,
  WashingMachine,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import DateTime from '@/components/DateTime'
import {  useRouter } from 'next/navigation'

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathName = usePathname()
  const router = useRouter()

  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-muted/40 md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <Link
              href='/admin/dashboard'
              className='flex items-center gap-2 font-semibold'
            >
              <Lock className='h-6 w-6' color='red' />
              <span className='text-xl'>Admin Dashboard</span>
            </Link>
          </div>
          <div className='flex-1'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
              <Link
                href='/admin/dashboard'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard' ? 'font-bold' : ''
                }`}
              >
                <Gauge className='h-4 w-4' />
                Dashboard
              </Link>
              <Link
                href='/admin/dashboard/properties'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/properties' ? 'font-bold' : ''
                }`}
              >
                <Landmark className='h-4 w-4' />
                Properties
              </Link>
              <Link
                href='/admin/dashboard/off-plan-projects'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/off-plan-projects' ? 'font-bold' : ''
                }`}
              >
                <School className='h-4 w-4' />
                Off Plan Projects
              </Link>
              <Link
                href='/admin/dashboard/amenities'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/amenities' ? 'font-bold' : ''
                }`}
              >
                <WashingMachine className='h-4 w-4' />
                Amenities
              </Link>

              <Link
                href='/admin/dashboard/agents'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/agents' ? 'font-bold' : ''
                }`}
              >
                <Users className='h-4 w-4' />
                Agents
              </Link>
              <Link
                href='/admin/dashboard/subscribers'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/subscribers' ? 'font-bold' : ''
                }`}
              >
                <ShieldCheck className='h-4 w-4' />
                Subscribers
              </Link>
              <Link
                href='/admin/dashboard/developers'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/developers' ? 'font-bold' : ''
                }`}
              >
                <Building2 className='h-4 w-4' />
                Dubai Developers
              </Link>
              <Link
                href='/admin/dashboard/blogs'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/blogs' ? 'font-bold' : ''
                }`}
              >
                <Rss className='h-4 w-4' />
                Blogs
              </Link>

              <Accordion type='single' collapsible className='space-y-4'>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>
                    <li
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary `}
                    >
                      <StickyNote className='h-4 w-4' />
                      Page Management
                    </li>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='ml-2'>
                      <li>
                        <Link href='/admin/dashboard/pages/about-us'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName === '/admin/dashboard/pages/about-us'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            About Us
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/why-dubai'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName === '/admin/dashboard/pages/why-dubai'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Why Dubai
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/invest-in-dubai'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/invest-in-dubai'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Invest in Dubai Real-Estate
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/dubai-fact-numbers'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/dubai-fact-numbers'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Dubai Fact Numbers
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/why-invest-off-plan'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/why-invest-off-plan'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Why Invest in Off Plan
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/guide-renting'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/guide-renting'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Guide on Renting
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/guide-selling'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/guide-selling'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Guide to Selling
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/privacy-policy'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/privacy-policy'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Privacy & Policy
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href='/admin/dashboard/logs'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/logs' ? 'font-bold' : ''
                }`}
              >
                <FileClock className='h-4 w-4' />
                Admin Logs
              </Link>
              <Link
                href='/admin/dashboard/settings'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/settings' ? 'font-bold' : ''
                }`}
              >
                <Settings className='h-4 w-4' />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='shrink-0 md:hidden'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col'>
            <div className='flex-1'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
              <Link
                href='/admin/dashboard'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard' ? 'font-bold' : ''
                }`}
              >
                <Gauge className='h-4 w-4' />
                Dashboard
              </Link>
              <Link
                href='/admin/dashboard/properties'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/properties' ? 'font-bold' : ''
                }`}
              >
                <Landmark className='h-4 w-4' />
                Properties
              </Link>
              <Link
                href='/admin/dashboard/off-plan-projects'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/off-plan-projects' ? 'font-bold' : ''
                }`}
              >
                <School className='h-4 w-4' />
                Off Plan Projects
              </Link>
              <Link
                href='/admin/dashboard/amenities'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/amenities' ? 'font-bold' : ''
                }`}
              >
                <WashingMachine className='h-4 w-4' />
                Amenities
              </Link>

              <Link
                href='/admin/dashboard/agents'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/agents' ? 'font-bold' : ''
                }`}
              >
                <Users className='h-4 w-4' />
                Agents
              </Link>
              <Link
                href='/admin/dashboard/subscribers'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/subscribers' ? 'font-bold' : ''
                }`}
              >
                <ShieldCheck className='h-4 w-4' />
                Subscribers
              </Link>
              <Link
                href='/admin/dashboard/developers'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/developers' ? 'font-bold' : ''
                }`}
              >
                <Building2 className='h-4 w-4' />
                Dubai Developers
              </Link>
              <Link
                href='/admin/dashboard/blogs'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/blogs' ? 'font-bold' : ''
                }`}
              >
                <Rss className='h-4 w-4' />
                Blogs
              </Link>

              <Accordion type='single' collapsible className='space-y-4'>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>
                    <li
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary `}
                    >
                      <StickyNote className='h-4 w-4' />
                      Page Management
                    </li>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='ml-2'>
                      <li>
                        <Link href='/admin/dashboard/pages/about-us'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName === '/admin/dashboard/pages/about-us'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            About Us
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/why-dubai'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName === '/admin/dashboard/pages/why-dubai'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Why Dubai
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/invest-in-dubai'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/invest-in-dubai'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Invest in Dubai Real-Estate
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/dubai-fact-numbers'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/dubai-fact-numbers'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Dubai Fact Numbers
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/why-invest-off-plan'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/why-invest-off-plan'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Why Invest in Off Plan
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/guide-renting'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/guide-renting'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Guide on Renting
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/guide-selling'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/guide-selling'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Guide to Selling
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/dashboard/pages/privacy-policy'>
                          <span
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                              pathName ===
                              '/admin/dashboard/pages/privacy-policy'
                                ? 'font-bold'
                                : ''
                            }`}
                          >
                            <Layers2 className='h-4 w-4' />
                            Privacy & Policy
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href='/admin/dashboard/logs'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/logs' ? 'font-bold' : ''
                }`}
              >
                <FileClock className='h-4 w-4' />
                Admin Logs
              </Link>
              <Link
                href='/admin/dashboard/settings'
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathName === '/admin/dashboard/settings' ? 'font-bold' : ''
                }`}
              >
                <Settings className='h-4 w-4' />
                Settings
              </Link>
            </nav>
          </div>
            </SheetContent>
          </Sheet>
          <div className='w-full flex-1'>
            <DateTime />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' size='icon' className='rounded-full'>
                <CircleUser className='h-5 w-5' />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={()=>router.push('/admin/login')}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
          {children}
        </main>
        <footer className='flex justify-center text-center'>
          <div className='pb-2'>
            <span className='text-sm text-muted-foreground'>
              Copyright © {new Date().getFullYear()} by Real-Estate. All Rights
              Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DashboardLayout

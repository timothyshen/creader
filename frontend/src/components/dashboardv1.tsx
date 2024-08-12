/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Sidebar } from "./Dashboard/SideBar"
import { Header } from "./Dashboard/Header"
import { BookIcon, DollarSignIcon, UsersIcon, StarIcon } from "lucide-react"
import { BookTable } from "./Dashboard/Table/BookTable"
import { CommonCard } from "./Dashboard/CommonCard"

export function Dashboardv1() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="sm:col-span-4" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>Your Books</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Manage your published books and works in progress.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Publish New Book</Button>
              </CardFooter>
            </Card>
            <CommonCard title="Total Books" icon={<BookIcon className="w-4 h-4 text-muted-foreground" />} value="24" description="+3 from last month" />
            <CommonCard title="Total Sales" icon={<DollarSignIcon className="w-4 h-4 text-muted-foreground" />} value="$12,345" description="+15% from last month" />
            <CommonCard title="Total Readers" icon={<UsersIcon className="w-4 h-4 text-muted-foreground" />} value="3,456" description="+8% from last month" />
            <CommonCard title="Total Reviews" icon={<StarIcon className="w-4 h-4 text-muted-foreground" />} value="1,234" description="+20% from last month" />
            <CommonCard title="Avg. Rating" icon={<StarIcon className="w-4 h-4 text-muted-foreground" />} value="4.7" description="+0.2 from last month" />
          </div>
          <div>
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Your Books</CardTitle>
                <CardDescription>Manage your published books.</CardDescription>
              </CardHeader>
              <CardContent>
                <BookTable />
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>24</strong>
                  books
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

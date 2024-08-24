/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "./Dashboard/SideBar"
import { Header } from "./Dashboard/Header"
import { BookIcon, DollarSignIcon, MoveVerticalIcon, StarIcon, UsersIcon } from "lucide-react"
import { BookTable } from "./Dashboard/Table/BookTable"
import { CommonCard } from "./Dashboard/CommonCard"
import { Progress } from "@/components/ui/progress"
import { CreateCopyright } from "./Modal/CreateCopyright"

export function Dashboardv1() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="sm:col-span-4" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle>Your Books</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Manage your published books and works in progress.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <CreateCopyright />
          </CardFooter>
        </Card>
        <CommonCard title="Total Books" icon={<BookIcon className="w-4 h-4 text-muted-foreground" />} value="24" description="+3 from last month" />
        <CommonCard title="Total Sales" icon={<DollarSignIcon className="w-4 h-4 text-muted-foreground" />} value="$12,345" description="+15% from last month" />
        <CommonCard title="Total Readers" icon={<UsersIcon className="w-4 h-4 text-muted-foreground" />} value="3,456" description="+8% from last month" />
        <CommonCard title="Total Reviews" icon={<StarIcon className="w-4 h-4 text-muted-foreground" />} value="1,234" description="+20% from last month" />
        <Card x-chunk="dashboard-07-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-4xl">$12,345</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">+25% from last month</div>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label="25% increase" />
          </CardFooter>
        </Card>
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
    </>
  )
}

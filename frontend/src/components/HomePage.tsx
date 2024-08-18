/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="grid gap-4 md:grid-cols-2 md:gap-10">
              <div className="space-y-4 text-primary-foreground">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Unleash Your Writing Potential
                </h1>
                <p className="md:text-xl">
                  Write with focus, collaborate seamlessly, and publish with ease on our powerful online writing
                  platform.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Writing
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Features to Elevate Your Writing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of tools to help you write, collaborate, and publish with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <FilePenIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Distraction-Free Writing</h3>
                <p className="text-muted-foreground">
                  Focus on your craft with our minimalist, clutter-free writing interface.
                </p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <Columns2Icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Collaborative Editing</h3>
                <p className="text-muted-foreground">Invite your team to review and provide feedback on your work.</p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <GlobeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Publishing Options</h3>
                <p className="text-muted-foreground">
                  Easily publish your work to the web or export to various formats.
                </p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <ClipboardIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Version Control</h3>
                <p className="text-muted-foreground">
                  Track changes and revert to previous versions of your documents.
                </p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <SearchIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Research Tools</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate research materials and citations into your writing.
                </p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <PowerIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-muted-foreground">
                  Personalize your writing experience with custom themes and settings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from writers who have found success with our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
              <Card className="p-6 shadow-md bg-background">
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#55efc4] text-3xl flex items-center justify-center">
                    😊
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Jane Doe</div>
                    <p className="text-muted-foreground">
                      "Write.io has transformed my writing process. The\n distraction-free tools and collaborative
                      features have\n been a game-changer."
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 shadow-md bg-background">
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#ffeaa7] text-3xl flex items-center justify-center">
                    🤓
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">John Smith</div>
                    <p className="text-muted-foreground">
                      "I've been using Write.io for all my writing projects,\n and the publishing options have made it
                      so easy to get\n my work out there."
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 shadow-md bg-background">
                <div className="flex items-start gap-4">
                  <div className="rounded-full w-12 h-12 bg-[#fdcb6e] text-3xl flex items-center justify-center">
                    🤗
                  </div>
                  <div className="grid gap-1 items-start text-sm">
                    <div className="font-bold">Sarah Lee</div>
                    <p className="text-muted-foreground">
                      "Write.io has streamlined my writing workflow and\n allowed me to focus on what I love most -
                      crafting\n compelling stories."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">On-Chain Benefits</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leverage the power of blockchain technology to enhance your writing experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <BitcoinIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Secure Storage</h3>
                <p className="text-muted-foreground">
                  Store your writing securely on the blockchain, ensuring integrity and immutability.
                </p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <CoinsIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Tokenized Content</h3>
                <p className="text-muted-foreground">
                  Monetize your work by tokenizing your content and selling it directly to your audience.
                </p>
              </div>
              <div className="grid gap-1 bg-background p-6 rounded-lg shadow-md">
                <ScalingIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Decentralized Publishing</h3>
                <p className="text-muted-foreground">
                  Publish your work on a decentralized platform, free from censorship and centralized control.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <p className="text-xs">&copy; 2024 Write.io. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function ClipboardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CoinsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function Columns2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 3v18" />
    </svg>
  )
}


function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function PenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function ScalingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

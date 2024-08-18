// Sidebar.tsx
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BookIcon, InfoIcon, LayoutDashboardIcon, PenIcon, SettingsIcon } from "@/components/Common/Icons";

export function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                        prefetch={false}
                    >
                        <PenIcon className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Author</span>
                    </Link>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                prefetch={false}
                            >
                                <LayoutDashboardIcon className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                prefetch={false}
                            >
                                <BookIcon className="h-5 w-5" />
                                <span className="sr-only">Books</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Books</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                prefetch={false}
                            >
                                <InfoIcon className="h-5 w-5" />
                                <span className="sr-only">Analytics</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Analytics</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                prefetch={false}
                            >
                                <SettingsIcon className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
}

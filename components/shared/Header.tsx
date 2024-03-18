import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Book Me Ticket Logo"
                        width={500}
                        height={120}
                    />
                </Link>

                <SignedIn>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems />
                    </nav>

                </SignedIn>

                <div className="flex w-32 justify-end">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobileNav />
                    </SignedIn>

                    <Button asChild className="rounded-full" size="lg">
                    </Button>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>

                        </Button>

                    </SignedOut>
                </div>
            </div>

        </header>
    )
}

export default Header
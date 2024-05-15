'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Heroes } from "./Heroes"
import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

	

export default function Heading () {

  const {isAuthenticated,isLoading} = useConvexAuth()

return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome to <span className="underline">KardioKeeper</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Keep Every Workout in Check
      </h3>
      {isLoading && <div className="w-full flex justify-center items-center">
        <Spinner size='lg'/>
        </div>}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter KardioKeeper
            <ArrowRight className="w-4 h-4 ml-2"/>
          </Link>
      </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode='modal'>
            <Button>
              Get KardioKeeper For Free
              <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </SignInButton>
        )}
    </div>
)
}
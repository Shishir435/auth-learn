import prisma from "@/lib/db"
import { Suspense } from "react"

export default async function Home() {
  const user = await prisma.user.create({
    data: {
      name: "hdksfvhfvghjg",
    },
  })
  return (
    <div>
      <Suspense fallback={<div>leading</div>}>{JSON.stringify(user)}</Suspense>
    </div>
  )
}

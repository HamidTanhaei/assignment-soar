import {ComponentProps} from "react"

import { cn } from "@/lib/utils.ts"

export const Card = ({ className, disablePadding = false, ...props }: ComponentProps<"div"> & { disablePadding?: boolean }) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-3xl bg-white",
        !disablePadding && "px-4 md:px-7 py-4 md:py-8",
        className
      )}
      {...props}
    />
  )
}

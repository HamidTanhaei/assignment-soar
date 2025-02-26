import {ComponentProps} from "react"

import { cn } from "@/lib/utils"

export const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-3xl bg-white",
        className
      )}
      {...props}
    />
  )
}

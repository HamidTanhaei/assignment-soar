import { Card } from "../ui/card"
import { cn } from "@/lib/utils"
import styles from "./CreditCard.module.css"
import { IconCardChip, IconMasterCard } from "../ui/Icon"

interface CreditCardProps {
  variant: "dark" | "light"
  balance: number
  cardHolder: string
  cardNumber: string
  validThru: string
}

export function CreditCard({
  variant,
  balance,
  cardHolder,
  cardNumber,
  validThru,
}: CreditCardProps) {

  return (
    <Card className={cn(
      "w-[265px] md:w-[350px] h-[170px] md:h-[235px] flex-shrink-0 relative overflow-hidden",
      variant === "dark" ? `${styles.card} text-white` : "border border-gray-200"
    )} disablePadding={true}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-center px-5 md:px-6 pt-4 md:pt-6">
          <div>
            <p className={cn(
              variant !== "dark" && "text-slate-400",
              "text-[11px] md:text-xs opacity-80"
            )}>Balance</p>
            <p className={cn(
                variant !== "dark" && "text-blue-900",
                "text-sm md:text-lg font-semibold"
              )}  >${balance.toLocaleString()}</p>
          </div>
          <IconCardChip className={cn(
            variant !== "dark" && "text-zinc-700",
            "w-7 h-7 md:w-10 md:h-10"
          )} />
        </div>

        <div className="flex justify-between items-center px-6 pt-5 md:pt-7 pb-3 md:pb-7">
            <div>
              <p className={cn(
                variant !== "dark" ? "text-slate-400" : "opacity-80",
                "text-[10px] md:text-xs"
              )}>CARD HOLDER</p>
              <p className={cn(
                variant !== "dark" && "text-blue-900",
                "text-[13px] md:text-sm"
              )}>{cardHolder}</p>
            </div>
            <div>
              <p className={cn(
                variant !== "dark" ? "text-slate-400" : "opacity-70",
                "text-[10px] md:text-xs"
              )}>VALID THRU</p>
              <p className={cn(
                variant !== "dark" && "text-blue-900",
                "text-[13px] md:text-sm"
              )}>{validThru}</p>
            </div>
          </div>
        
        <div className={cn(
          styles['card-number'],
          "px-5 md:px-6 py-3 md:py-2 flex items-center text-sm md:text-lg justify-between flex-1",
          variant !== "dark" && "border-t border-gray-200 text-blue-900"
        )}>
          <div>{cardNumber}</div>
          <IconMasterCard className="w-6 h-6 md:w-10 md:h-10" />
        </div>
      </div>
    </Card>
  )
} 
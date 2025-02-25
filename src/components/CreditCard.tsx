import { Card } from "./ui/card"
import { cn } from "@/lib/utils"

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
      "w-[380px] h-[220px] p-6 relative overflow-hidden",
      variant === "dark" ? "bg-slate-900 text-white" : "bg-white"
    )}>
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="text-sm opacity-80">Balance</p>
          <p className="text-2xl font-semibold">${balance.toLocaleString()}</p>
        </div>
        
        <div>
          <p className="text-lg mb-4">{cardNumber}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs opacity-80">CARD HOLDER</p>
              <p>{cardHolder}</p>
            </div>
            <div>
              <p className="text-xs opacity-80">VALID THRU</p>
              <p>{validThru}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
} 
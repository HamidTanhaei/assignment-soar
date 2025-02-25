import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Send } from "lucide-react"

const contacts = [
  { name: "Livia Bator", role: "CEO", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Randy Press", role: "Director", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Workman", role: "Designer", image: "https://i.pravatar.cc/100?img=3" },
]

export function QuickTransfer() {
  return (
    <Card className="h-[235px] p-7">
      <div className="flex gap-4 mb-6">
          {contacts.map((contact) => (
            <div key={contact.name} className="text-center">
              <img
                src={contact.image}
                alt={contact.name}
                className="w-12 h-12 rounded-full mb-2"
              />
              <p className="font-medium text-sm">{contact.name}</p>
              <p className="text-sm text-gray-500">{contact.role}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <Input 
            type="number" 
            placeholder="Enter amount" 
            defaultValue="525.50"
          />
          <Button className="gap-2">
            Send <Send className="h-4 w-4" />
          </Button>
        </div>
    </Card>
  )
} 
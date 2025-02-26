import { Card } from "./ui/card"  
import { IconArrowRight, IconSend } from "./ui/Icon"
import { useState } from "react"
import { useForm } from "react-hook-form"

const contacts = [
  { name: "Livia Bator", role: "CEO", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Randy Press", role: "Director", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Workman", role: "Designer", image: "https://i.pravatar.cc/100?img=3" },
  { name: "Sara Nik", role: "CEO", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Lucky", role: "Director", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Super Man", role: "Designer", image: "https://i.pravatar.cc/100?img=3" },
  { name: "Livia Bator", role: "CEO", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Randy Press", role: "Director", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Workman", role: "Designer", image: "https://i.pravatar.cc/100?img=3" },
  { name: "Hamid Tan", role: "CEO", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Jennifer", role: "Director", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Super Man", role: "Designer", image: "https://i.pravatar.cc/100?img=3" },
]

export function QuickTransfer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedContact, setSelectedContact] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(true)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      amount: "525.50"
    }
  })
  
  const contactsPerSlide = 3
  const totalSlides = Math.ceil(contacts.length / contactsPerSlide)
  
  const showNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const onSubmit = (data: { amount: string }) => {
    if (!selectedContact) {
      setMessage("Please select a contact first")
      return
    }
    
    setMessage(`Successfully sent $${data.amount} to ${selectedContact}`)
    setShowForm(false)
    setSelectedContact(null)
    reset({ amount: "" })

  
    setTimeout(() => {
      setShowForm(true)
      setMessage(null)
    }, 3000)
  }

  return (
    <Card className="h-[276px] px-7 py-8">
      {message && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm">
          {message}
        </div>
      )}
      <div className="flex items-center">
        <div className="overflow-hidden">
          <div 
            className="flex mb-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {contacts.map((contact) => (
              <div 
                key={contact.name} 
                className="text-center flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedContact(prev => prev === contact.name ? null : contact.name)}
                style={{ width: `${100 / contactsPerSlide}%` }}
              >
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-[76px] h-[76px] rounded-full mb-2 mx-auto"
                />
                <p className={`text-md ${selectedContact === contact.name ? 'font-bold' : ''}`}>
                  {contact.name}
                </p>
                <p className={`text-sm text-indigo-400 ${selectedContact === contact.name ? 'font-bold' : ''}`}>
                  {contact.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        {contacts.length > contactsPerSlide && (
          <button onClick={showNextSlide} className="ml-4 shrink-0 rounded-full p-4 shadow-lg text-indigo-400">
            <IconArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="flex gap-4 items-center">
        {showForm ? (
          <>
            <div className="text-md text-indigo-400 text-nowrap">
              Write Amount
            </div>
            <div className="md:w-auto w-full mt-5 md:mt-0 order-last md:order-none bg-accent hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full flex items-center gap-4 relative">
              <input 
                {...register("amount", {
                  pattern: {
                    value: /^\d*\.?\d*$/,
                    message: "Please enter a valid number"
                  },
                  required: "Amount is required"
                })}
                placeholder="Enter amount" 
                className="w-full py-4 px-6 border-none outline-none bg-transparent text-sm placeholder:text-slate-400" 
              />
              {errors.amount && (
                <span className="text-red-500 text-xs absolute -bottom-5">
                  {errors.amount.message?.toString()}
                </span>
              )}
              <button 
                onClick={handleSubmit(onSubmit)} 
                className="flex gap-3 py-3 px-6 bg-zinc-700 text-white rounded-full text-md text-meduim hover:bg-zinc-600 transition-colors"
              >
                Send <IconSend />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full text-center text-green-600 font-medium">
            {message}
          </div>
        )}
      </div>
    </Card>
  )
} 
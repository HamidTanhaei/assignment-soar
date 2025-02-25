import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Deposit',
      data: [200, 150, 250, 350, 220, 230, 300],
      backgroundColor: '#4F46E5',
      borderRadius: 4,
    },
    {
      label: 'Withdraw',
      data: [450, 320, 300, 450, 150, 400, 380],
      backgroundColor: '#1F2937',
      borderRadius: 4,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: '#f3f4f6',
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
    },
  },
}

export function WeeklyActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Bar options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
} 
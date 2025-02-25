import { Card } from "./ui/card"
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const data: ChartData<'bar'> = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Withdraw',
      data: [450, 320, 300, 450, 150, 400, 380],
      backgroundColor: '#232323',
      borderRadius: 10,
      borderSkipped: false,
      borderWidth: 3,
      barThickness: 18,
    },
    {
      label: 'Deposit',
      data: [200, 150, 250, 350, 220, 230, 300],
      backgroundColor: '#396AFF',
      borderRadius: 10,
      borderSkipped: false,
      borderWidth: 3,
      barThickness: 18,
    },
  ],
}

const options: ChartOptions<'bar'> = {
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
      ticks: {
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
      align: 'end' as const,
    },
  },
}

export function WeeklyActivity() {
  return (
    <Card className="h-[300px] p-7">
      <Bar options={options} data={data} />
    </Card>
  )
} 
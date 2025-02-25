import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const data = {
  labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
  datasets: [
    {
      data: [30, 15, 20, 35],
      backgroundColor: [
        '#4F46E5',
        '#F97316',
        '#3B82F6',
        '#1F2937'
      ],
      borderWidth: 0,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
}

export function ExpenseStatistics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Doughnut options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
} 
import { Card } from "./ui/card"
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
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
        '#343c6a',
        '#FC7900',
        '#232323',
        '#396AFF'
      ],
      borderWidth: 0,
    },
  ],
}

const options: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    }
  }
}

export function ExpenseStatistics() {

  return (
    <Card className="h-[300px] p-7">
      <Pie 
        options={options} 
        data={data}
      />
    </Card>
  )
} 
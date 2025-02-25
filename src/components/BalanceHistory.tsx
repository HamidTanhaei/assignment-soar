import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler
} from 'chart.js'
import React from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const data = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  datasets: [
    {
      label: 'Balance',
      data: [250, 200, 450, 400, 800, 600, 650],
      borderColor: '#1814F3',
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
  ],
}

const options: ChartOptions<'line'> = {
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
        stepSize: 200,
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

export function BalanceHistory() {
  const chartRef = React.useRef<ChartJS<"line">>(null);

  React.useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#2D60FF20');
      gradient.addColorStop(1, '#2D60FF00');
      
      // Update chart data backgroundColor
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  return (
    <Card className="h-[276px] p-7">
      <Line ref={chartRef} options={options} data={data} />
    </Card>
  )
} 
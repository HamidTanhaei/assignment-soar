import { Card } from "./ui/card"
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
  Filler,
  ChartData
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

interface BalanceHistoryProps {
  data?: Array<{
    date: string;
    balance: number;
  }>;
  isLoading?: boolean;
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

export function BalanceHistory({ data = [], isLoading = false }: BalanceHistoryProps) {
  const chartRef = React.useRef<ChartJS<"line">>(null);

  const chartData: ChartData<'line'> = {
    labels: data.map(item => item.date),
    datasets: [
      {
        data: data.map(item => item.balance),
        borderColor: '#1814F3',
        tension: 0.5,
        fill: true,
        pointRadius: 0,
        backgroundColor: function(context: {
          chart: {
            ctx: CanvasRenderingContext2D;
            chartArea: { top: number; bottom: number; } | undefined;
          }
        }) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          
          if (!chartArea) {
            return 'rgba(45, 96, 255, 0.1)';
          }
          
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, '#2D60FF20');
          gradient.addColorStop(1, '#2D60FF00');
          return gradient;
        },
      },
    ],
  };

  if (isLoading || data.length === 0) {
    return <Card className="h-[276px] p-7 flex items-center justify-center text-gray-400">
      {isLoading ? "Loading balance history..." : "No balance history data available"}
    </Card>;
  }

  return (
    <Card className="h-[276px] p-7">
      <Line ref={chartRef} options={options} data={chartData} />
    </Card>
  )
} 
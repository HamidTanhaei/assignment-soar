import { useRef } from 'react';
import { ChartData, Chart as ChartJS, ChartOptions } from 'chart.js';

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
};

export function useBalanceHistory(data: Array<{ month: string; balance: number }>) {
  const chartRef = useRef<ChartJS<'line'>>(null);

  const chartData: ChartData<'line'> = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        data: data.map((item) => item.balance),
        borderColor: '#1814F3',
        tension: 0.5,
        fill: true,
        pointRadius: 0,
        backgroundColor: function (context: {
          chart: {
            ctx: CanvasRenderingContext2D;
            chartArea: { top: number; bottom: number } | undefined;
          };
        }) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return 'rgba(45, 96, 255, 0.1)';
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, '#2D60FF20');
          gradient.addColorStop(1, '#2D60FF00');
          return gradient;
        },
      },
    ],
  };

  return { chartData, options, chartRef };
} 
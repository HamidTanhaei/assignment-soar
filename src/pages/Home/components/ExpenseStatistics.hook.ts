import { useMemo } from 'react';
import {
  ChartOptions,
} from 'chart.js';

export function useExpenseStatistics(data: Array<{ category: string; amount: number; }>) {
  const colors = useMemo(() => [
    '#343c6a',
    '#FC7900',
    '#232323',
    '#396AFF',
    '#4BC0C0',
    '#FF6384',
    '#9966FF',
    '#FFCE56',
  ], []);

  const chartData = useMemo(() => ({
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.amount),
        backgroundColor: data.map((_, index) => colors[index % colors.length]),
        borderWidth: 0,
      },
    ],
  }), [data, colors]);

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
      },
    },
  };

  return { chartData, options };
} 
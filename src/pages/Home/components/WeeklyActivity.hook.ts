import { useMemo } from 'react';
import { ChartData, ChartOptions } from 'chart.js';

type StatsItem = {
  id: string;
  type: 'Withdraw' | 'Deposit';
  value: number;
  label: 'Sat' | 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
};

export function useWeeklyActivity(data: StatsItem[]) {
  const days = useMemo(() => ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], []);

  const withdrawData = useMemo(() => {
    return days.map((day) => {
      const item = data.find((d) => d.label === day && d.type === 'Withdraw');
      return item ? item.value : 0;
    });
  }, [data, days]);

  const depositData = useMemo(() => {
    return days.map((day) => {
      const item = data.find((d) => d.label === day && d.type === 'Deposit');
      return item ? item.value : 0;
    });
  }, [data, days]);

  const chartData: ChartData<'bar'> = {
    labels: days,
    datasets: [
      {
        label: 'Withdraw',
        data: withdrawData,
        backgroundColor: '#232323',
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: 3,
        barThickness: 18,
      },
      {
        label: 'Deposit',
        data: depositData,
        backgroundColor: '#396AFF',
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: 3,
        barThickness: 18,
      },
    ],
  };

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
  };

  return { chartData, options };
} 
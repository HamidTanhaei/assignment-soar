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

type StatsItem = {
  id: string;
  type: "Withdraw" | "Deposit";
  value: number;
  label: "Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
}

interface WeeklyActivityProps {
  data: StatsItem[];
  isLoading?: boolean;
}

export function WeeklyActivity({ data, isLoading = false }: WeeklyActivityProps) {
  // If loading or no data, show placeholder or loading state
  if (isLoading) {
    return (
      <Card className="h-[300px] p-7 flex items-center justify-center">
        <p>Loading weekly activity data...</p>
      </Card>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Card className="h-[300px] p-7 flex items-center justify-center">
        <p>No weekly activity data available</p>
      </Card>
    );
  }

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const withdrawData = days.map(day => {
    const item = data.find(d => d.label === day && d.type === "Withdraw");
    return item ? item.value : 0;
  });
  
  const depositData = days.map(day => {
    const item = data.find(d => d.label === day && d.type === "Deposit");
    return item ? item.value : 0;
  });

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

  return (
    <Card className="h-[300px] p-7">
      <Bar options={options} data={chartData} />
    </Card>
  );
} 
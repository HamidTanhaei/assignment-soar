import { Card } from "../../../components/atom/card.tsx"
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

interface ExpenseStatisticsProps {
  data: Array<{
    category: string;
    amount: number;
  }>;
  isLoading?: boolean;
}

export function ExpenseStatistics({ data, isLoading = false }: ExpenseStatisticsProps) {
  if (isLoading || !data || data.length === 0) {
    return (
      <Card className="h-[300px] p-7 flex items-center justify-center">
        <p>{isLoading ? 'Loading expense statistics...' : 'No expense data available'}</p>
      </Card>
    );
  }

  const colors = ['#343c6a', '#FC7900', '#232323', '#396AFF', '#4BC0C0', '#FF6384', '#9966FF', '#FFCE56'];

  const chartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        data: data.map(item => item.amount),
        backgroundColor: data.map((_, index) => colors[index % colors.length]),
        borderWidth: 0,
      },
    ],
  };

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
  };

  return (
    <Card className="h-[300px]">
      <Pie 
        options={options} 
        data={chartData}
      />
    </Card>
  );
} 
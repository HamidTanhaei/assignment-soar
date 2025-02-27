import { Pie } from 'react-chartjs-2';
import { Card } from '@/components/atom';
import { useExpenseStatistics } from './ExpenseStatistics.hook';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseStatisticsProps {
  data: Array<{
    category: string;
    amount: number;
  }>;
  isLoading?: boolean;
}

export function ExpenseStatistics({
  data,
  isLoading = false,
}: ExpenseStatisticsProps) {
  const { chartData, options } = useExpenseStatistics(data);

  if (isLoading || !data || data.length === 0) {
    return (
      <Card className='h-[300px] p-7 flex items-center justify-center'>
        <p>
          {isLoading
            ? 'Loading expense statistics...'
            : 'No expense data available'}
        </p>
      </Card>
    );
  }

  return (
    <Card className='h-[300px]'>
      <Pie options={options} data={chartData} />
    </Card>
  );
}

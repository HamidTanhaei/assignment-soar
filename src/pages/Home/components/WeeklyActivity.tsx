import { Bar } from 'react-chartjs-2';
import { Card } from '@/components/atom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useWeeklyActivity } from './WeeklyActivity.hook';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type StatsItem = {
  id: string;
  type: 'Withdraw' | 'Deposit';
  value: number;
  label: 'Sat' | 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
};

interface WeeklyActivityProps {
  data: StatsItem[];
  isLoading?: boolean;
}

export function WeeklyActivity({
  data,
  isLoading = false,
}: WeeklyActivityProps) {
  const { chartData, options } = useWeeklyActivity(data);

  if (isLoading || !data || data.length === 0) {
    return (
      <Card className='h-[300px] p-7 flex items-center justify-center'>
        <p>
          {isLoading
            ? 'Loading weekly activity data...'
            : 'No weekly activity data available'}
        </p>
      </Card>
    );
  }

  return (
    <Card className='h-[300px]'>
      <Bar options={options} data={chartData} />
    </Card>
  );
}

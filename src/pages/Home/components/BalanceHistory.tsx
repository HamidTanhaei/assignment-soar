import { Line } from 'react-chartjs-2';
import { Card } from '@/components/atom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useBalanceHistory } from './BalanceHistory.hook';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface BalanceHistoryProps {
  data?: Array<{
    month: string;
    balance: number;
  }>;
  isLoading?: boolean;
}

export function BalanceHistory({
  data = [],
  isLoading = false,
}: BalanceHistoryProps) {
  const { chartData, options, chartRef } = useBalanceHistory(data);

  if (isLoading || data.length === 0) {
    return (
      <Card className='h-[276px] p-7 flex items-center justify-center text-gray-400'>
        {isLoading
          ? 'Loading balance history...'
          : 'No balance history data available'}
      </Card>
    );
  }

  return (
    <Card className='h-[276px]'>
      <Line ref={chartRef} options={options} data={chartData} />
    </Card>
  );
}

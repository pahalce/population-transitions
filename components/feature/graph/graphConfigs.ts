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
} from 'chart.js';
import { DataForPopulationGraph } from '../../../types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options: ChartOptions<'line'> = {
  plugins: {
    title: {
      display: true,
      text: 'Population',
    },
  },
  // maintainAspectRatio: true,
  responsive: true,
};

export const createData = (data: DataForPopulationGraph[]) => {
  const labels = data[0].valueSeries.map((data) => data.year);
  return {
    labels: labels,
    datasets: data.map((data) => {
      return {
        label: data.pref.prefName,
        data: data.valueSeries.map((data) => data.value),
        borderColor: 'rgb(75, 192, 192)',
      };
    }),
  };
};

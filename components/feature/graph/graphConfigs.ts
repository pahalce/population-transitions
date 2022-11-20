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
      display: false,
    },
  },
  maintainAspectRatio: false,
  responsive: false,
};

export const createData = (data: DataForPopulationGraph[]) => {
  const labels = data[0].valueSeries.map((data) => data.year);
  const color = data.map((p) => Math.floor((p.pref.prefCode / 47) * 16777216).toString(16));
  return {
    labels: labels,
    datasets: data.map((data) => {
      const color =
        '#' +
        Math.floor(((data.pref.prefCode - 1) / 47) * 16 ** 6)
          .toString(16)
          .padStart(6, '0');
      return {
        label: data.pref.prefName,
        data: data.valueSeries.map((data) => data.value),
        borderColor: color,
      };
    }),
  };
};

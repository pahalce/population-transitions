import { Line } from 'react-chartjs-2';
import { DataForPopulationGraph } from '../../../types';
import { createData, options } from './graphConfigs';
type PopulationGraphProps = {
  data: DataForPopulationGraph[];
};
const PopulationGraph = ({ data }: PopulationGraphProps) => {
  if (data.length === 0) {
    return <span>都道府県を選んでください</span>;
  }
  return (
    <div className="graph">
      <Line options={options} data={createData(data)} />
    </div>
  );
};

export default PopulationGraph;

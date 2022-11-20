import { useRecoilState } from 'recoil';
import { DataForPopulationGraphState } from '../../../stores/atoms';
import SectionTitle from '../../common/SectionTitle';
import PopulationGraph from './PopulationGraph';

const GraphSection = () => {
  const [populationData, setPopulationData] = useRecoilState(DataForPopulationGraphState);
  return (
    <div className="graph-section-container">
      <SectionTitle title="グラフ" />
      <PopulationGraph data={populationData} />
    </div>
  );
};

export default GraphSection;

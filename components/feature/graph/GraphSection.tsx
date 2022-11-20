import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import PopulationGraph from './PopulationGraph';

const GraphSection = () => {
  return (
    <div>
      <SectionTitle title="グラフ" />
      <PopulationGraph data={[]} />
    </div>
  );
};

export default GraphSection;

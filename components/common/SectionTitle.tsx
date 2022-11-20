import React from 'react';

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="subtitle">{title}</h2>;
};

export default SectionTitle;

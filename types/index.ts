export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureResponse = { prefCode: number; prefName: string }[];

export type PopulationResponse = { year: number; value: number }[];
export type DataForPopulationGraph = { pref: Prefecture; data: PopulationResponse };

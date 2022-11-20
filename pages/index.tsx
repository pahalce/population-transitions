import Head from 'next/head';
import GraphSection from '../components/feature/graph/GraphSection';
import PrefSelectSection from '../components/feature/pref/PrefSelectSection';

export const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>人口推移</title>
        <meta name="description" content="日本国内の人口推移を描画" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">人口推移を確認</h1>
      <PrefSelectSection />
      <GraphSection />
    </div>
  );
};

export default Home;

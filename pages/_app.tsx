import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/react-query';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import '../styles/reset.css';
import '../styles/global.css';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </Layout>
  );
}

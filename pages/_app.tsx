import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/react-query';
import type { AppProps } from 'next/app';

import '../styles/reset.css';
import '../styles/global.css';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

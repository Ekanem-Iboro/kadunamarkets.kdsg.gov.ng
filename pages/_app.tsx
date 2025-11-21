import '../styles/globals.css'
import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
// import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase"
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

// interface AppProps {
//   Component: ,
//   pageProps:
// }

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component, pageProps }: AppProps) {
  // const [user, loading, error] = useAuthState(auth);

  // Create a client
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 2,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider session={pageProps.session}> */}
      {/* <Provider store={store}> */}
      {/* <Component {...pageProps} /> */}
      {/* </Provider> */}
      <AnimatePresence >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
        <ToastContainer />
      </AnimatePresence>
    </QueryClientProvider>

  );
}

export default MyApp
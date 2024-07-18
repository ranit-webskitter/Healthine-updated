import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";
import type { AppProps } from "next/app";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster, toast } from 'sonner'
  import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "@/rdux-toolkit/store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '@/styles/globals.css'
// Create a client
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
   <MuiThemeProvider>
  
   <Toaster position="bottom-left" richColors/>
    <Component {...pageProps}/>
   </MuiThemeProvider>
   </QueryClientProvider>
   </Provider>
   </>
  
 
}

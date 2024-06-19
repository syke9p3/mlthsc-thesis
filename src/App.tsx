
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="bg-[#F6F7F9]">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App

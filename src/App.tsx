
import { QueryClient, QueryClientProvider } from "react-query"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#F6F7F9]">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App

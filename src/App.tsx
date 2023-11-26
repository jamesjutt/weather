import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherForm from "./components/WeatherForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <WeatherForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;

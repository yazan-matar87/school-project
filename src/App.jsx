import './App.css';
import LogInPage from "./Components/LogInPage"; // Ensure the path and case match the file name
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import NoPage from './Components/NoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/logIn" element={<LogInPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

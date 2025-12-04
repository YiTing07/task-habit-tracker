import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Task from './pages/Task';
import Habit from './pages/Habit';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/habit" element={<Habit />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App

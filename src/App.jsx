import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Task from './pages/Task';
import Habit from './pages/Habit';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/habit" element={<Habit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

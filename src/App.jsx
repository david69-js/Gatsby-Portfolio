import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetail from './pages/ProjectDetail'
import NotFoundPage from './pages/NotFoundPage'

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/project/:uid" element={<ProjectDetail />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default App

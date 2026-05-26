import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import "./App.css";

import AutopsyPage from './pages/Autopsy/AutopsyPage';
import InventoryPage from './pages/Inventory/InventoryPage';
import SummariesPage from './pages/Summaries/SummariesPage';
import DistributionPage from './pages/Distribution/DistributionPage';
import GenomicsPage from './pages/Genomics/GenomicsPage';
import OtherPage from './pages/Other/OtherPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AutopsyPage />} />
        <Route path="autopsy" element={<AutopsyPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="summaries" element={<SummariesPage />} />
        <Route path="distribution" element={<DistributionPage />} />
        <Route path="genomics" element={<GenomicsPage />} />
        <Route path="other" element={<OtherPage />} />
      </Route>
    </Routes>
  );
}
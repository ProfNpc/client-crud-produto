import { Routes, Route } from 'react-router-dom';
import ListaProdutos from './pages/ListaProdutos';
import NovoProduto from './pages/NovoProduto';
import EditarProduto from './pages/EditarProduto';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/novo" element={<NovoProduto />} />
        <Route path="/editar/:id" element={<EditarProduto />} />
      </Routes>
    </div>
  );
}

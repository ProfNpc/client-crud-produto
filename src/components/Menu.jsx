import { NavLink } from 'react-router-dom';

// Menu de navegação horizontal exibido em todas as páginas.
// "Usuários" e "Pedidos" ainda não têm página: aparecem desabilitados.
export default function Menu() {
  function classeLink({ isActive }) {
    if (isActive) {
      return 'menu-item menu-item-ativo';
    }
    return 'menu-item';
  }

  return (
    <nav className="menu">
      <NavLink to="/produtos" className={classeLink}>Produtos</NavLink>
      <span className="menu-item menu-item-desabilitado" title="Em breve">Usuários</span>
      <span className="menu-item menu-item-desabilitado" title="Em breve">Pedidos</span>
      <NavLink to="/" end className={classeLink}>Principal</NavLink>
    </nav>
  );
}

import { NavLink } from 'react-router-dom';

const tabs = [
  'Autopsy',
  'Inventory',
  'Summaries',
  'Distribution',
  'Genomics',
  'Other'
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {tabs.map(tab => (
        <NavLink
          key={tab}
          to={`/${tab.toLowerCase()}`}
          className={({ isActive }) => isActive ? 'tab active' : 'tab'}
        >
          {tab}
        </NavLink>
      ))}
    </nav>
  );
}
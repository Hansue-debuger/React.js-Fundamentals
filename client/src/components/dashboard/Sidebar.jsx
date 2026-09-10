import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'overview', label: 'Dashboard', icon: '▦' },
  { id: 'blogs', label: 'Blog list', icon: '▤' },
  { id: 'profile', label: 'Profile', icon: '◎' },
]

function Sidebar({ activeView, onChangeView }) {
  return (
    <aside className="dashboard-sidebar">
      <Link className="dashboard-brand" to="/">
        <span className="dashboard-brand-mark">H</span>
        <span>Studio / Hans</span>
      </Link>
      <div className="dashboard-sidebar-label">Workspace</div>
      <nav className="dashboard-nav" aria-label="Dashboard navigation">
        {NAV_ITEMS.map((item) => (
          <button
            className={activeView === item.id ? 'is-active' : ''}
            key={item.id}
            type="button"
            onClick={() => onChangeView(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
        <button
          className={activeView === 'comments' ? 'is-active' : ''}
          type="button"
          onClick={() => onChangeView('comments')}
        >
          <span aria-hidden="true">◌</span>
          Comments
        </button>
      </nav>
      <div className="dashboard-sidebar-bottom">
        <Link to="/">← Back to public site</Link>
        <p>Publishing workspace<br />Last synced just now</p>
      </div>
    </aside>
  )
}

export default Sidebar

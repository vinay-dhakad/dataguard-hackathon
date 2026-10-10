import { NavLink } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, BellRing, Users, Files, Activity, ShieldAlert, ClipboardCheck } from 'lucide-react';
const items = [
  { to: '/', label: 'Overview', icon: LayoutDashboard },
  { to: '/alerts', label: 'Security alerts', icon: BellRing },
  { to: '/users', label: 'Employees & access', icon: Users },
  { to: '/files', label: 'Sensitive files', icon: Files },
  { to: '/events', label: 'Activity events', icon: Activity },
  { to: '/exceptions', label: 'Approved exceptions', icon: ClipboardCheck },
];
export default function Sidebar() { return <aside className="sidebar"><div className="brand"><div className="brand-mark"><ShieldCheck size={23}/></div><div><strong>DataGuard</strong><small>SECURITY OPERATIONS</small></div></div><div className="nav-caption">WORKSPACE</div><nav>{items.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => `nav-link ${isActive?'active':''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav><div className="sidebar-bottom"><div className="secure-dot"/><div><strong>Detection engine</strong><small>Local environment</small></div><span className="online-dot"/></div><div className="sidebar-foot">DataGuard prototype · v1.1</div></aside>; }

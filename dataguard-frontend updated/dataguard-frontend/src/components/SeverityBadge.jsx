export default function SeverityBadge({ value = 'LOW' }) { return <span className={`badge severity-${String(value).toLowerCase()}`}>{value}</span>; }

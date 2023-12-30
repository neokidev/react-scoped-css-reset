export default function DestyleCSS({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="react-scoped-reset-css__destyle">{children}</div>
}

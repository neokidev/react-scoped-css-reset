export default function DestyleCSS({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="react-scoped-css-reset__destyle">{children}</div>
}

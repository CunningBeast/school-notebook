export default async function Games({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="container flex min-h-screen flex-col p-8">
      <h1>Games</h1>
      {children}
    </div>
  );
}

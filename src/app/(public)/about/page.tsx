export default async function About({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="container flex min-h-screen flex-col p-8">
      <h1>About</h1>
      {children}
    </div>
  );
}

export default async function SignIn({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="container flex min-h-screen flex-col p-8">
      <h1>Sign in</h1>
      {children}
    </div>
  );
}

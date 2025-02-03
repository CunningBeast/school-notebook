export function Layout({
  logo,
  mainNavMobile,
  mainNavDesktop,
  profile,
  actions,
}: {
  logo?: React.ReactNode;
  mainNavMobile?: React.ReactNode;
  mainNavDesktop?: React.ReactNode;
  profile?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 flex h-14 items-center gap-6">
        <div className="md:hidden mr-2">{mainNavMobile}</div>

        <div className="hidden md:flex">{logo}</div>
        <div className="flex flex-1 items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium flex-col md:flex-row ">
            {mainNavDesktop}
          </div>
          <div className="flex flex-1 items-center justify-end space-x-3 ">
            {actions}
            {profile}
          </div>
        </div>
      </div>
    </header>
  );
}

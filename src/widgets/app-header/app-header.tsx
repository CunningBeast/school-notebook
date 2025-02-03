import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";

export function AppHeader() {
  return (
    <Layout
      logo={<Logo />}
      mainNavMobile={<MainNav variant="mobile" logo={<Logo />} />}
      mainNavDesktop={<MainNav variant="desktop" />}
      profile={<Profile />}
    />
  );
}

import HomePage from "../app/page.jsx";
import TeamPage from "../app/team/page.jsx";
import MatchesPage from "../app/matches/page.jsx";
import MediaPage from "../app/media/page.jsx";
import ContactsPage from "../app/contacts/page.jsx";
import SiteChrome from "../components/site-chrome.jsx";

const PAGE_COMPONENTS = {
  home: HomePage,
  team: TeamPage,
  matches: MatchesPage,
  media: MediaPage,
  contacts: ContactsPage,
};

export default function App({ page, pathname, payload }) {
  const PageComponent = PAGE_COMPONENTS[page] || HomePage;

  return (
    <SiteChrome club={payload.club} pathname={pathname}>
      <PageComponent data={payload} />
    </SiteChrome>
  );
}

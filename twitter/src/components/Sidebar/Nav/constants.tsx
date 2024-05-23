import { PageNamesEnum, PagePathsEnum } from "types/paths";
import Explore from "assets/images/svg/explore.svg?react";
import Profile from "assets/images/svg/profile.svg?react";
import Search from "assets/images/svg/search.svg?react";

export const logos = {
  [PageNamesEnum.Explore]: <Explore />,
  [PageNamesEnum.Profile]: <Profile />,
  [PageNamesEnum.Search]: <Search />,
};

export const navLinks = [
  { name: PageNamesEnum.Home, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
  { name: PageNamesEnum.Explore, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Explore },
  {
    name: PageNamesEnum.Search,
    logo: logos[PageNamesEnum.Search],
    path: PagePathsEnum.Search,
  },
  {
    name: PageNamesEnum.Notifications,
    logo: logos[PageNamesEnum.Explore],
    path: PagePathsEnum.Notifications,
  },
  {
    name: PageNamesEnum.Messages,
    logo: logos[PageNamesEnum.Explore],
    path: PagePathsEnum.Messages,
  },
  {
    name: PageNamesEnum.Bookmarks,
    logo: logos[PageNamesEnum.Explore],
    path: PagePathsEnum.Bookmarks,
  },
  { name: PageNamesEnum.Lists, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Lists },
  { name: PageNamesEnum.Profile, logo: logos[PageNamesEnum.Profile], path: PagePathsEnum.Profile },
  { name: PageNamesEnum.More, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.More },
];

import { PageNamesEnum, PagePathsEnum } from "types/paths";
import Explore from "assets/images/svg/explore.svg?react";
import Profile from "assets/images/svg/profile.svg?react";

export const logos = {
  [PageNamesEnum.Explore]: <Explore />,
  [PageNamesEnum.Profile]: <Profile />,
};

export const navLinks = [
  { name: PageNamesEnum.Home, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
  { name: PageNamesEnum.Explore, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
  {
    name: PageNamesEnum.Notifications,
    logo: logos[PageNamesEnum.Explore],
    path: PagePathsEnum.Home,
  },
  { name: PageNamesEnum.Messages, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
  { name: PageNamesEnum.Bookmarks, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
  { name: PageNamesEnum.Lists, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
  { name: PageNamesEnum.Profile, logo: logos[PageNamesEnum.Profile], path: PagePathsEnum.Profile },
  { name: PageNamesEnum.More, logo: logos[PageNamesEnum.Explore], path: PagePathsEnum.Home },
];

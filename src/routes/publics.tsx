import * as Screens from "../screens";

const publicsRoutes = [
  {
    path: "/",
    component: Screens.Home,
  },
  {
    path: "/address/:cep",
    component: Screens.AddressesInfo,
  },
  {
    path: "*",
    component: Screens.Error,
  },
];

export default publicsRoutes;

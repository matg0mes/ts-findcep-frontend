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
];

export default publicsRoutes;

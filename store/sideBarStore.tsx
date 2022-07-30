// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

//Interfaces
import { SideBarData } from "../interfaces";

const UserSidebar: SideBarData[] = [
  {
    to: "/new",
    title: "Nuevo",
    Icon: <AddBoxIcon />,
  },
];

export { UserSidebar };

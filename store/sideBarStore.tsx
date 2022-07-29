// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

//Interfaces
import { SideBarData } from "../interfaces";

const UserSidebar: SideBarData[] = [
  {
    to: "/home/account",
    title: "Account",
    Icon: <AccountBoxIcon />,
  },
  {
    to: "/home/optionADMIN1",
    title: "Option1",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/home/optionADMIN2",
    title: "Option2",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/home/optionADMIN3",
    title: "Option3",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/home/optionADMIN4",
    title: "Option4",
    Icon: <AddBoxIcon />,
  },
];

export { UserSidebar };

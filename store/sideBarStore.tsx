// Icons
import AddBoxIcon from "@mui/icons-material/AddBox";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookRoundedIcon from '@mui/icons-material/BookRounded';

//Interfaces
import { SideBarData } from "../interfaces";

const UserSidebar: SideBarData[] = [
  {
    to: "/new",
    title: "Nuevo",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/document",
    title: "Mis documentos",
    Icon: <FolderCopyIcon />,
  },
  {
    to: "/loan",
    title: "Mis préstamos",
    Icon: <BookRoundedIcon />,
  },
  {
    to: "/autores",
    title: "Autores",
    Icon: <PeopleAltIcon />,
  },
];

export { UserSidebar };

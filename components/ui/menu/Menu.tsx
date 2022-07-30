import { useRouter } from "next/router";
import {
  Typography,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Menu as MUIMenu,
  Divider,
} from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import BookIcon from "@mui/icons-material/Book";

interface Props {
  open: boolean;
  anchorEl: null | HTMLElement;
  to: string;
  handleClose: () => void;
}

const Menu = ({ open, anchorEl, to, handleClose }: Props) => {
  const router = useRouter();

  const handleTo = () => {
    router.push(to);
  };

  return (
    <Paper sx={{ width: 320, maxWidth: "100%", position: "absolute" }}>
      <MUIMenu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        <MenuList>
          <MenuItem onClick={handleTo}>
            <ListItemIcon>
              <FileOpenIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="text.secondary">
                Abrir
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="text.secondary">
                Eliminar
              </Typography>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <BookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="text.secondary">
                Reserva online
              </Typography>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </MUIMenu>
    </Paper>
  );
};

export { Menu };

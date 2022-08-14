import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

// Icons
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";

// Redux
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  incrementClicks,
  turnOffRender,
  openSidebar,
  closeSidebar,
  logout,
  enableFilter,
} from "../../reducers";

// Components
// UI
import { ActiveLink, Search, SettingsSearch } from "./";

// Auth
import { logoutToken } from "../../actions";

interface ModuleAuthProps {
  setClicked: (boolean: boolean) => void;
}

const ModuleAuth = ({ setClicked }: ModuleAuthProps) => {
  return (
    <Box className={"navbar__actions"}>
      <ActiveLink href="/auth/login">
        <Typography variant="overline" onClick={() => setClicked(true)}>
          Log in
        </Typography>
      </ActiveLink>
      <Divider orientation="vertical" flexItem />
      <ActiveLink href="/auth/signup">
        <Button variant="outlined" onClick={() => setClicked(true)}>
          Sign up
        </Button>
      </ActiveLink>
    </Box>
  );
};

const ModuleLogged = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { name } = user!;

  const handleLogout = () => {
    dispatch(turnOffRender());
    dispatch(logout());
    logoutToken();
  };

  return (
    <Box className={"navbar__actions"}>
      <Typography variant="overline" display={"flex"} alignItems={"center"}>
        {name}
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="Logout">
        <IconButton
          onClick={handleLogout}
          aria-label="Logout"
          color="primary"
          size="small"
        >
          <LogoutIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useAppDispatch();

  const { logged } = useAppSelector((state) => state.auth);

  const { sidebar } = useAppSelector((state) => state.ux);
  const { filter } = useAppSelector((state) => state.filter);
  const { enabled } = filter;

  const turnOffUxRender = () => {
    dispatch(turnOffRender());
  };

  const handleOpenSideBar = () => {
    dispatch(openSidebar());
  };

  const handleCloseSideBar = () => {
    dispatch(closeSidebar());
  };

  const handleActivateSettingFilters = () => {
    dispatch(
      enableFilter({
        ...filter,
        enabled: !enabled,
      })
    );
  };

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  return (
    <AppBar
      position={"static"}
      elevation={0}
      className={logged ? "navbar__appbar navbar__connected" : "navbar__appbar"}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
      >
        <Box display={"flex"} alignItems={"center"}>
          {logged ? (
            sidebar.open ? (
              <Icon
                sx={{ marginRight: 1, cursor: "pointer" }}
                onClick={handleCloseSideBar}
              >
                <CloseIcon />
              </Icon>
            ) : (
              <Icon
                sx={{ marginRight: 1, cursor: "pointer" }}
                onClick={handleOpenSideBar}
              >
                <MenuIcon />
              </Icon>
            )
          ) : (
            <Icon sx={{ marginRight: 1 }}>
              <DiamondIcon />
            </Icon>
          )}
          <NextLink href={logged ? "/home" : "/"} passHref>
            <Link
              sx={{ textDecoration: "none", color: "#fff" }}
              onClick={turnOffUxRender}
            >
              <Typography
                variant="h6"
                sx={{ userSelect: "none", cursor: "pointer", ml: 2 }}
              >
                WriteLibrary
              </Typography>
            </Link>
          </NextLink>
        </Box>
        {logged && (
          <Box width={500} display="flex">
            <Search />
            <Tooltip
              title="Editar filtros"
              onClick={handleActivateSettingFilters}
            >
              <IconButton
                sx={{ m: 1 }}
                color="primary"
                aria-label="setting filters"
                component="span"
              >
                <ManageSearchOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        {logged && enabled && <SettingsSearch />}
        {logged ? <ModuleLogged /> : <ModuleAuth setClicked={setClicked} />}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };

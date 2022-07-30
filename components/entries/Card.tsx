import { useState } from "react";
import {
  Card as MUICard,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardHeader,
  Avatar,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

// Interface
import { IDocument } from "../../interfaces";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Redux
import { useAppSelector } from "../../hooks";

// Components
import { Menu } from "../../components/ui/menu";

interface Props {
  document: IDocument;
}

const Card = ({ document }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const { name } = user;

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTo = () => {
    router.push(`/document/${document.id}`);
  };

  return (
    <MUICard
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 225,
        minHeight: 300,
        m: 2,
        ":hover": {
          boxShadow: "0px 0px 0px 3px #60a3bc",
        },
        backgroundColor: "#2C3A47",
      }}
    >
      <CardHeader
        sx={{ width: "100%", backgroundColor: "#222f3e" }}
        avatar={
          <Avatar sx={{ bgcolor: "#ced6e0" }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClickListItem}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              open={open}
              anchorEl={anchorEl}
              to={`/document/${document.id}`}
              deleteTo={`/delete/${document.id}`}
              handleClose={handleClose}
            />
          </>
        }
        title={document.title}
        subheader={document.dateLastModified}
      />
      <Divider sx={{ border: "1 solid white", width: "100%" }} />
      <CardMedia
        component="img"
        sx={{ width: 100, p: 2 }}
        image={
          document.type === "libro"
            ? "/img/libros.png"
            : document.type === "artículo científico"
            ? "/img/research.png"
            : document.type === "ponencia"
            ? "/img/documents.png"
            : "/img/book.png"
        }
        alt="a"
      />
      <Box sx={{ width: "100%", height: "100%", p: 0 }}>
        <CardContent sx={{ paddingBottom: "3px !important" }}>
          {document.autors.map((autor, i) => (
            <Typography
              key={i}
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              <i>{autor}</i>
            </Typography>
          ))}
        </CardContent>
      </Box>
      <Divider sx={{ border: "1 solid white", width: "100%" }} />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          backgroundColor: "#222f3e",
        }}
      >
        <Button variant="text" color="success" size="small" onClick={handleTo}>
          Abrir
        </Button>
      </CardActions>
    </MUICard>
  );
};

export { Card };

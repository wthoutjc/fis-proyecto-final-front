import { useRouter } from "next/router";
import { alpha, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import BookIcon from "@mui/icons-material/Book";

interface EnhancedTableToolbarProps {
  numSelected: number;
  selected: string;
}

const EnhancedTableToolbar = ({
  numSelected,
  selected,
}: EnhancedTableToolbarProps) => {
  const router = useRouter();

  const handleOpen = () => {
    router.push(`/document/${selected}`);
  };

  const handleDelete = () => {
    router.push(`/delete/${selected}`);
  };

  const handleReserve = () => {};

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected > 1
            ? `${numSelected} seleccionados`
            : `${numSelected} seleccionado`}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Documentos
        </Typography>
      )}
      {numSelected === 1 && (
        <>
          <Tooltip title="Ver">
            <IconButton onClick={handleOpen}>
              <FileOpenIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Borrar" onClick={handleDelete}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reservar" onClick={handleReserve}>
            <IconButton>
              <BookIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
};

export { EnhancedTableToolbar };

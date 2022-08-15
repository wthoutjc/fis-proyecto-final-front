import { Box, Typography } from "@mui/material";

// Interfaces
import { IAuthor } from "../../interfaces";

// Components
import { Author, NewAuthor } from "./";

interface Props {
  authors: IAuthor[];
}

const Authors = ({ authors }: Props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        Gestión de autores
      </Typography>
      <Box display="flex" sx={{ width: "100%" }}>
        <Box display="flex" flexWrap={"wrap"} sx={{ width: "30%" }}>
          {authors ? authors.map((author) => (
            <Author key={author.id} author={author} />
          )) : "No hay autores"}
        </Box>
        <Box sx={{ width: "70%" }}>
          <NewAuthor />
        </Box>
      </Box>
    </Box>
  );
};

export { Authors };

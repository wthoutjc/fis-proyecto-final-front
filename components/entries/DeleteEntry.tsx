import { Box, Button, Typography } from "@mui/material";

// Components
import { IPublication } from "../../interfaces";

import Image from "next/image";
import { Card } from "./Card";
import { useState } from "react";

// Redux
import { useAppSelector } from "../../hooks";

interface Props {
  document: IPublication;
}

const DeleteEntry = ({ document }: Props) => {
  const [accessToDelete, setAccessToDelete] = useState(true);

  const { accessToken } = useAppSelector((state) => state.auth);

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/publications/${document.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };

  if (accessToDelete) {
    return (
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={500}
          sx={{ mb: 2 }}
          textAlign="center"
        >
          WriteLibrary
        </Typography>
        <Box
          sx={{
            p: 2,
            backgroundColor: "#123",
            mb: 2,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Image
                src="https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:good/v1659224269/fis-pf/delete_gf4zjh.png"
                alt="delete"
                width={150}
                height={150}
              />
            </Box>
            <Typography
              variant="h6"
              fontWeight={200}
              sx={{ color: "white", mb: 2, mt: 2 }}
            >
              ¿Estás seguro de que quieres eliminar este documento?
            </Typography>
            <Typography
              variant="body2"
              fontWeight={200}
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Los cambios no se podrán revertir.
            </Typography>
            <Button onClick={handleDelete} color="error" variant="contained">
              ELIMINAR
            </Button>
          </Box>
          <Box
            sx={{
              position: "relative",
              ml: 6,
              ":before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                backgroundColor: "rgba(185,0,0,0.5)",
              },
            }}
          >
            <Card document={document} />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={500}
        sx={{ mb: 2 }}
        textAlign="center"
      >
        WriteLibrary
      </Typography>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#123",
          mb: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Image
            src="https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:good/v1659223766/fis-pf/unauthorized_igjgmq.png"
            width={180}
            height={160}
            alt="unauthorized"
          />
        </Box>
        <Box>
          <Typography sx={{ color: "white", mb: 1 }} variant="h5">
            No tienes el control sobre este documento
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Para poder eliminar este documento, debes ser propietario del mismo.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { DeleteEntry };

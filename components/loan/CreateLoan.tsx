// Interfaces
import { Box, Button, Typography } from "@mui/material";
import { IPublication } from "../../interfaces";

// Components
import { Card } from "../entries";

// Redux
import { useSelector } from "react-redux";

interface Props {
  document: IPublication;
}

const CreateLoan = ({ document }: Props) => {
  const { accessToken } = useSelector((state: any) => state.auth);

  const handleLoan = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/loans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        publicationId: document.id,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ background: "#112233", p: 2, borderRadius: 3 }}>
        <Typography variant="body1" color="white">
          Reserva online
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Iniciar reserva online para
        </Typography>
      </Box>
      <Box>
        <Card document={document} />
      </Box>
      <Box>
        {document.inPhysical ? (
          <Button onClick={handleLoan} variant="contained" color="success">
            Reservar
          </Button>
        ) : (
          <Typography variant="body1" color="red">
            El documento no se encuentra disponible
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { CreateLoan };

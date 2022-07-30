import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { IDocument } from "../../../interfaces";

interface Props {
  document: IDocument;
}

const DATA = [
  {
    dateModification: 12312312,
    name: "Juan",
  },
  {
    dateModification: 123132312312,
    name: "Perez 2",
  },
  {
    dateModification: 1212123,
    name: "Felipe 3",
  },
];

const ActivityEntry = ({ document }: Props) => {
  return (
    <Box sx={{ p: 2, backgroundColor: "#123" }}>
      <Box>
        {DATA.map((item, index) => (
          <Box key={index}>
            <Card sx={{ mb: 2 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#3498db" }} aria-label="recipe">
                    {item.name[0]}
                  </Avatar>
                }
                title={item.name}
                subheader={item.dateModification}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Ha realizado cambios en el documento.
                </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ borderColor: "white", mb: 2 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { ActivityEntry };

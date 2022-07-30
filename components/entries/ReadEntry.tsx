import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import NextImage from "next/image";

// Component
import { Card, EditEntry } from "../../components/entries";
import { ActivityEntry, DetailsEntry } from "./subcomponents";

// Interfaces
import { IDocument } from "../../interfaces";

// Icons
import DetailsIcon from "@mui/icons-material/Details";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  document: IDocument | null;
}

const ReadEntry = ({ document }: Props) => {
  const [value, setValue] = useState<null | string>("detalles");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {document ? (
        <>
          <Box sx={{ p: 2, maxWidth: "70%" }}>
            <Typography variant="h4" fontWeight={600} sx={{ mb: 1 }}>
              {document.title}
            </Typography>
            <Divider sx={{ backgroundColor: "#123", mb: 1 }} />
            <Box
              sx={{
                backgroundColor: "#112233",
                color: "white",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Box width={"100%"}>
                <BottomNavigation
                  value={value}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "#001122",
                    boxShadow: "0px 0px 0px 1px gray",
                  }}
                >
                  <BottomNavigationAction
                    label="Detalles"
                    value="detalles"
                    icon={
                      <Tooltip title="Detalles">
                        <DetailsIcon />
                      </Tooltip>
                    }
                  />
                  <BottomNavigationAction
                    label="Actividad"
                    value="actividad"
                    icon={
                      <>
                        <Tooltip title="Actividad">
                          <AddReactionIcon />
                        </Tooltip>
                      </>
                    }
                  />
                  <BottomNavigationAction
                    label="Editar"
                    value="editar"
                    icon={
                      <Tooltip title="Editar">
                        <EditIcon />
                      </Tooltip>
                    }
                  />
                </BottomNavigation>
              </Box>
              {value === "detalles" ? (
                <DetailsEntry document={document} />
              ) : value === "actividad" ? (
                <ActivityEntry document={document} />
              ) : (
                value === "editar" && <EditEntry document={document} />
              )}
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{ p: 2 }}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h3" sx={{ mb: 4 }}>
              Oops! parece que llegaste al lugar equivocado
            </Typography>
            <Box>
              <NextImage
                src="https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:good/v1659205532/fis-pf/no-results_m5gsnb.png"
                width={200}
                height={200}
                alt="not-found"
              />
            </Box>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" fontWeight={600} sx={{ mb: 4 }}>
              Quizás te interese:
            </Typography>
            <Box display="flex">
              {DATA.map((document, index) => (
                <Card key={index} document={document} />
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export { ReadEntry };

const DATA: IDocument[] = [
  {
    id: "1",
    typeId: "ISBN",
    title: "Test 1",
    type: "libro",
    ownerName: "Pepito 1 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 1 Perez",
    dateCreated: 12344,
    dateLastModified: 12344,
    autors: ["Test"],
    editorial: "Test 1",
  },
  {
    id: "2",
    typeId: "ISBN",
    title: "Test 2",
    type: "libro",
    ownerName: "Pepito 2 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 2 Perez",
    dateCreated: 12344,
    dateLastModified: 12344,
    autors: ["Test"],
    editorial: "Test 2",
  },
  {
    id: "3",
    typeId: "ISBN",
    title: "Test 3",
    type: "libro",
    ownerName: "Pepito 3 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 3 Perez",
    dateCreated: 32344,
    dateLastModified: 32344,
    autors: ["Test"],
    editorial: "Test 3",
  },
  {
    id: "4",
    typeId: "ISBN",
    title: "Test 4",
    type: "libro",
    ownerName: "Pepito 4 Perez",
    ownerEmail: "pepito@correo.com",
    lastModifiedName: "Pepito 4 Perez",
    dateCreated: 42344,
    dateLastModified: 42344,
    autors: ["Test"],
    editorial: "Test 4",
  },
];

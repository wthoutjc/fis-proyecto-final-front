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
import { EditEntry } from "../../components/entries";
import { DetailsEntry } from "./subcomponents";

// Interfaces
import { IPublication, IAuthor } from "../../interfaces";

// Icons
import DetailsIcon from "@mui/icons-material/Details";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  document: IPublication | null;
  authors: IAuthor[];
}

const ReadEntry = ({ document, authors }: Props) => {
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
              {document.name}
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
              ) : (
                value === "editar" && (
                  <EditEntry document={document} authors={authors} />
                )
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
        </>
      )}
    </>
  );
};

export { ReadEntry };

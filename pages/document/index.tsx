import { Box, Chip, capitalize, Typography } from "@mui/material";
import { ConnectedLayout, Layout } from "../../components/layout";

// Redux
import { useAppSelector } from "../../hooks";

// Icons
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { CTable } from "../../components/ui/table";

// Interfaces
import { IDocument } from "../../interfaces";

const DocumentPage = () => {
  const { filter } = useAppSelector((state) => state.filter);
  const { currentFilter } = filter;

  const handleDelete = () => {
    console.log("handleDelete");
  };

  return (
    <Layout title="Document">
      <ConnectedLayout>
        <Box display="flex" flexDirection={"column"} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
            Filtros
          </Typography>
          <Box
            sx={{
              backgroundColor: "#112233",
              p: 2,
              borderRadius: 2,
              display: "flex",
            }}
          >
            <Chip
              sx={{ mr: 2 }}
              icon={
                currentFilter === "autor" ? (
                  <PeopleAltIcon />
                ) : currentFilter === "título" ? (
                  <DescriptionIcon />
                ) : (
                  <AccountBalanceIcon />
                )
              }
              label={`${capitalize(currentFilter)}`}
              variant="outlined"
            />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Descripción del filtro: TODO
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
            Documentos
          </Typography>
          <Box>
            <CTable data={DATA} />
          </Box>
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default DocumentPage;

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

import { Box, Chip, capitalize, Typography } from "@mui/material";
import { ConnectedLayout, Layout } from "../../components/layout";

// Redux
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setDateFilter, setOwnDocsFilter } from "../../reducers";

// Icons
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";

// Components
import { CTable } from "../../components/ui/table";

// Interfaces
import { IPublication } from "../../interfaces";

const DocumentPage = () => {
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector((state) => state.filter);
  const { currentFilter, dateFilter, ownDocsFilter } = filter;

  const handleDelete = () => {
    console.log("handleDelete");
  };

  return (
    <Layout title="Document - WriteLibrary">
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
                  <PeopleAltIcon fontSize="small" />
                ) : currentFilter === "título" ? (
                  <DescriptionIcon fontSize="small" />
                ) : (
                  <AccountBalanceIcon fontSize="small" />
                )
              }
              label={`${capitalize(currentFilter)}`}
              variant="outlined"
            />
            {dateFilter && (
              <Chip
                onDelete={() =>
                  dispatch(
                    setDateFilter({
                      ...filter,
                      dateFilter: false,
                    })
                  )
                }
                sx={{ mr: 2 }}
                icon={<CalendarMonthIcon fontSize="small" />}
                label="Fecha"
                variant="outlined"
              />
            )}
            {ownDocsFilter && (
              <Chip
                onDelete={() =>
                  dispatch(
                    setOwnDocsFilter({
                      ...filter,
                      ownDocsFilter: false,
                    })
                  )
                }
                sx={{ mr: 2 }}
                icon={<ArticleIcon fontSize="small" />}
                label="Documentos propios"
                variant="outlined"
              />
            )}
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
            Documentos
          </Typography>
          <Box>
            <CTable data={[]} />
          </Box>
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default DocumentPage;

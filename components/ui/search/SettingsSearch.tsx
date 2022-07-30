import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  capitalize,
} from "@mui/material";
import { useEffect, useRef, createRef, useMemo } from "react";

// Redux
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setFilter, setCurrentFilter, filterSlice } from "../../../reducers";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const SettingsSearch = () => {
  const settingSearchRef = useRef<HTMLInputElement>(null);

  const categorySelectRef = useMemo(
    () => Array.from({ length: 3 }).map(() => createRef<HTMLInputElement>()),
    []
  );

  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filter);

  const { enabled } = filter;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (categorySelectRef[0].current &&
          !categorySelectRef[0].current.contains(event.target as Node)) ||
        (categorySelectRef[1].current &&
          !categorySelectRef[1].current.contains(event.target as Node)) ||
        (categorySelectRef[2].current &&
          !categorySelectRef[2].current.contains(event.target as Node))
      ) {
        return;
      } else if (
        settingSearchRef.current &&
        !settingSearchRef.current.contains(event.target as Node)
      ) {
        return dispatch(setFilter({ ...filter, enabled: !filter.enabled }));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, enabled, filter]);

  return (
    <Box
      ref={settingSearchRef}
      sx={{
        position: "absolute",
        top: 258,
        left: 0,
        right: 0,
        bottom: 0,
        width: "600px",
        height: "200px",
        margin: "auto",
        p: 2,
        zIndex: 1,
        backgroundColor: "#1e272e",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          Editar filtros
        </Typography>
        <IconButton
          onClick={() => dispatch(setFilter({ ...filter, enabled: false }))}
          sx={{ m: 1 }}
          color="primary"
          aria-label="setting filters"
          component="span"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <Stack direction="column" alignItems="flex-start" spacing={1}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            Categoria
          </Typography>
          <TextField
            sx={{ width: "50%" }}
            id="outlined-select-currency"
            select
            label="Categoria"
            value={filter.currentFilter}
            onChange={(e) => {
              dispatch(
                setCurrentFilter({ ...filter, currentFilter: e.target.value })
              );
            }}
            helperText="Selecciona una categoria"
          >
            {filter.filters.map((filter, i) => (
              <MenuItem
                ref={categorySelectRef[i] as any}
                key={i}
                value={filter}
              >
                {capitalize(filter)}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>
    </Box>
  );
};

export { SettingsSearch };

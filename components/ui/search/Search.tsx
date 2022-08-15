import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";

// Redux
import { useAppSelector } from "../../../hooks";

// React hook form
import { useForm } from "react-hook-form";

const Search = () => {
  const { filter } = useAppSelector((state) => state.filter);

  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    search: string;
  }>();

  const handleSearch = (data: { search: string }) => {
    router.push(
      `${process.env.NEXT_PUBLIC_HOST_NAME}/document?${filter.currentFilter}=${data.search}`
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        m: 1,
        backgroundColor: "#112233aa",
        borderRadius: 1,
      }}
    >
      <form onSubmit={handleSubmit(handleSearch)}>
        <TextField
          fullWidth
          label={`Buscar por ${filter.currentFilter}`}
          {...register("search", {
            required: true,
          })}
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            ),
          }}
          size={"small"}
        />
      </form>
    </Box>
  );
};

export { Search };

import {Stack, Pagination} from "@mui/material";

export const PaginationComponent = ({page, onChange}) => {
    return (
        <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={onChange} variant="outlined" color="secondary"/>
        </Stack>
    )
}
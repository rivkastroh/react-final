import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { ShowService } from "../customerComponents/Service";
import { AddService } from "./AddService";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { fetchServices } from "../../app/slice/services.slice";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: "inline-block",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export const ServicesEdit = () => {
    const services = useSelector((state: RootState) => state.serviceState.services);
    const dispatch = useDispatch<AppDispatch>();
    if (!services) {
        dispatch(fetchServices());
    }
    return (
        <>
            <Stack spacing={2}>
                {
                    services?.map(s => {
                        return <div className="service-card"><ShowService serviceDetails={s} /></div>
                    })
                }
                <AddService />
            </Stack>
        </>
    );
}
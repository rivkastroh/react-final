import { useSelector } from "react-redux";
import type { RootState } from '../../app/store';
import { ShowService } from "./Service";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';


export const ShowServices = () => {
    const services = useSelector((state: RootState) => state.serviceState.services);
    const navigate = useNavigate();


    const clickService = (id: String) => {
        navigate(`/service/${id}`);
    }
    return (
        <>
            <h1>השרותים שלנו:</h1>
            <Box sx={{ p: 2, border: 'none', display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {
                    services.map(s => {
                        return (
                          <button 
                            onClick={() => clickService(s.serviceId)} 
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                          >
                            <div className="service-card">
                              <ShowService serviceDetails={s} />
                            </div>
                          </button>
                        )
                    })
                }
            </Box>
            <h2>{!services || services.length == 0 ? "אין שירותים זמינים" : "שרותים נוספים יעודכנו בהמשך"}</h2>
        </>
    );
}

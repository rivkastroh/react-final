import type { Service } from "../../types/types";


export const ShowService = ({ serviceDetails }: { serviceDetails: Service }) => {
    return (
        <>
            <h1>Service</h1>
            <h2>{serviceDetails.serviceName}</h2>
            {serviceDetails.description && <p>{serviceDetails.description}</p>}
        </>
    );
};
import type { Service } from "../../types/types";


export const ShowService = ({ serviceDetails }: { serviceDetails: Service }) => {
    return (
        <>
            <p style={{ fontWeight: 700, fontSize: "1.2em", margin: 0, color: "#22223b" }}>{serviceDetails.serviceName}</p>
            {serviceDetails.description && <p style={{ color: "#6366f1", margin: "0.3em 0 0 0" }}>{serviceDetails.description}</p>}
        </>
    );
};
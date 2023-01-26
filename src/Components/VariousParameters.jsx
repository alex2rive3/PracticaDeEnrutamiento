import React from "react";
import { useParams } from "react-router-dom";

const VariusParameters = () => {
    const { parameter, bgColor, color } = useParams();
    return (
        <div
            style={{
                color: color,
                backgroundColor: bgColor,
                textAlign: "center",
                minHeight: "100px",
                fontSize: "20px",
            }}
        >
            <p
                style={{
                    padding: "15px",
                }}
            >
                {parameter}
            </p>
        </div>
    );
};

export default VariusParameters;

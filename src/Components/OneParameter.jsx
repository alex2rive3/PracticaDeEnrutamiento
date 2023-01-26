import React from "react";
import { useParams } from "react-router-dom";

const OneParameter = () => {
    const { parameter } = useParams();
    return (
        <div>
            {isNaN(+`${parameter}`) ? (
                <p>{`La Palabra es ${parameter}`}</p>
            ) : (
                <p>{`El numero es ${parameter}`}</p>
            )}
        </div>
    );
};

export default OneParameter;

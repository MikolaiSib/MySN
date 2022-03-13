import React from 'react';
import preloader from "../../../image/loading-buffering.gif";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="loading" />
        </div>
    );
};

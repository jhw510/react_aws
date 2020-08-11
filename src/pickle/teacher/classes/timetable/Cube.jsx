import React from "react";

const Cube = ({ isOver, children }) => {
    const className = isOver ? " highlight-region" : "";

    return (
        <div className={`cube${className}`}>
            {children}
        </div>
    );
};

export default Cube;
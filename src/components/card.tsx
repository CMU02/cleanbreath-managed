import React from "react";

export default function Card({ children } : { children : React.ReactNode }) {
    return (
        <div className="Card">
            {children}
        </div>
    )
}
import React from "react";

export function Container(props) {
    return (
        <div
            className={`container md:max-w-screen-lg md:p-10 mx-auto xl:px-0 ${props.className ? props.className : ""
                }`}>
            {props.children}
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";


function BreadCrumbs  ({pathFragments}) {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {pathFragments.map((path, index) => (
                        <li
                            key={index}
                            className={`breadcrumb-item ${
                                index === pathFragments.length - 1 ? "active" : ""
                            }`}
                        >
                            {path.link ? (
                                <Link to={path.link}>
                                    {index === 0 ? (
                                        <i className="bi bi-house-door-fill"></i>
                                    ) : null}{" "}
                                    {path.text}
                                </Link>
                            ) : (
                                <span>{path.text}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
export default BreadCrumbs;

import React from "react";
import {Routes, Route, useMatch, Link, useParams, Outlet } from "react-router-dom";


export const BreadCrumbs = () => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to={"/"} className="nav-link">Go Home</Link>

            </li>
        </ol>
    </nav>
);

export default BreadCrumbs;

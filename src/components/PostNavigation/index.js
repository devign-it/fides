import React from "react";
import { Link } from "gatsby";
import NavigationItem from "../NavigationItem";
import "./styles.scss";

const PostNavigation = ({ subpath, next, previous }) => {
    return (
        <div className="post--navigation">
            {next && <NavigationItem text="Next project" to={`/${subpath}/${next.slug}`} />}
            {previous && <NavigationItem text="Previous project" to={`/${subpath}/${previous.slug}`} />}
        </div>
    );
};

export default PostNavigation;

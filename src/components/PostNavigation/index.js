import React from "react";
import { Link } from "gatsby";
import NavigationItem from "../NavigationItem";
import "./styles.scss";

const PostNavigation = ({ subpath, next, previous }) => {
    return (
        <div className="post--navigation">
            {previous && <NavigationItem text="Previous" to={`/${subpath}/${previous.slug}`} />}
            {next && <NavigationItem text="Next" to={`/${subpath}/${next.slug}`} />}
        </div>
    );
};

export default PostNavigation;

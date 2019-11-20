import React from "react";
import "./styles.scss";
import _ from "lodash";
import { Link } from "gatsby";

export default ({ tagSource }) => (
    <div className="tags--wrapper">
        {tagSource.map(({ node }, i) => {
            let tag = tagSource[i];
            return (
                <Link key={tag.slug} className="categoryTag" to={`/tags/${_.kebabCase(tag.slug)}`}>
                    <span>
                        <p>{tag.category}</p>
                    </span>
                </Link>
            );
        })}
    </div>
);

import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./styles.scss";

export default ({ tagSource }) => (
    <div className="tags--wrapper">
        {tagSource.map(({ node }, i) => {
            let tag = tagSource[i];
            return (
                // <Link key={tag.slug} className="categoryTag" to={`/tags/${_.kebabCase(tag.slug)}`}>
                //     <span>
                //         <p>{tag.category}</p>
                //     </span>
                // </Link>
                <div key={tag.slug} className="categoryTag">
                    <span>
                        <p>{tag.category}</p>
                    </span>
                </div>
            );
        })}
    </div>
);

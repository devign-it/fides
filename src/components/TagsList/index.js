import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./styles.scss";

const TagsList = ({ tagSource, showTagsBlack }) => {
    let classNames = "categoryTag";

    if (showTagsBlack) {
        classNames += " black";
    }

    return (
        <div className="tags--wrapper">
            {tagSource.map(({ node }, i) => {
                let tag = tagSource[i];
                return (
                    // <Link key={tag.slug} className="categoryTag" to={`/tags/${_.kebabCase(tag.slug)}`}>
                    //     <span>
                    //         <p>{tag.category}</p>
                    //     </span>
                    // </Link>
                    <div key={tag.slug} className={classNames}>
                        <span>
                            <p>{tag.category}</p>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TagsList;

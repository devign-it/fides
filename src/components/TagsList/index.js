import React from "react";
import "./styles.scss";

const TagsList = ({ tagSource, showTagsBlack }) => {
    let classNames = "categoryTag";

    if (showTagsBlack) {
        classNames += " black";
    }

    return (
        <div className="tags--wrapper">
            {tagSource.slice(0, 6).map(({ node }, i) => {
                let tag = tagSource[i];
                let hashtag = tag.category.replace(/\s+/g, "-").toLowerCase();

                return (
                    // <Link key={tag.slug} className="categoryTag" to={`/tags/${_.kebabCase(tag.slug)}`}>
                    //     <span>
                    //         <p>{tag.category}</p>
                    //     </span>
                    // </Link>
                    <div key={tag.slug} className={classNames}>
                        <span>
                            <p className="typography__block-small">#{hashtag}</p>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TagsList;

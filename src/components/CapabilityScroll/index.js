import React from "react";
import "./styles.scss";

class CapabilityScroll extends React.Component {
    render() {
        let sortedListFirst = this.props.dataSourceFirst.sort();
        let sortedListSecond = this.props.dataSourceSecond.sort();

        return (
            <ul className="list--capabilities__horizontal">
                <h3 className="list--title">{this.props.nameFirst}</h3>
                {sortedListFirst.map(({ node }, i) => {
                    return <li key={i}>{sortedListFirst[i]}</li>;
                })}

                <h3 className="list--title">{this.props.nameSecond}</h3>
                {sortedListSecond.map(({ node }, i) => {
                    return <li key={i}>{sortedListSecond[i]}</li>;
                })}
                {/* <h3 className="list--title">{this.props.nameThird}</h3>
                {sortedListThird.map(({ node }, i) => {
                    return <li key={i}>{sortedListFirst[i]}</li>;
                })} */}
            </ul>
        );
    }
}

export default CapabilityScroll;

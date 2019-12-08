import React from "react";
import "./styles.scss";
import Swiper from "swiper";

class CapabilityScroll extends React.Component {
    componentDidMount() {
        const amountSlides = this.props.dataSource.length;

        new Swiper(".swiper-container__vertical", {
            direction: "vertical",
            slidesPerView: "auto",
            loopedSlides: amountSlides,
            grabCursor: true,
            loop: true,
            breakpoints: {
                767: {
                    spaceBetween: 60,
                },
            },
        });
    }
    render() {
        return (
            <div className={`${this.props.name.toLowerCase()}`}>
                <h3>{this.props.name}</h3>

                <ul className="list--capabilities">
                    {this.props.dataSource.map(({ node }, i) => {
                        return (
                            <li className="typography__medium" key={i}>
                                {this.props.dataSource[i]}
                            </li>
                        );
                    })}
                </ul>
            </div>
            // <div className={`scroll--container__vertical ${this.props.name.toLowerCase()}`}>

            //     <div className="swiper-container swiper-container__vertical">
            //         <ul className="list--capabilities swiper-wrapper vertical">
            //             {this.props.dataSource.map(({ node }, i) => {
            //                 return (
            //                     <li className="swiper-slide vertical" key={i}>
            //                         {this.props.dataSource[i]}
            //                     </li>
            //                 );
            //             })}
            //         </ul>
            //         {/* <div class="swiper-pagination"></div> */}
            //     </div>
            // </div>
        );
    }
}

// const CapabilityScroll = ({ dataSource, name }) => {
//     return (
//         <div className={`scroll--container ${name.toLowerCase()}`}>
//             <h3>{name}</h3>
//             <ul className="list--capabilities">
//                 {dataSource.map(({ node }, i) => {
//                     return <li key={i}>{dataSource[i]}</li>;
//                 })}
//             </ul>
//         </div>
//     );
// };

export default CapabilityScroll;

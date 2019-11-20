import styled from "styled-components";

/*
border 1.5px solid $c-white
border-color: $c-white

@media screen and (min-width: $tablet-breakpoint) {
    top: $magicNumber / 2;
    border: 3px solid $c-white;
*/

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    position: sticky;
    z-index: 15;
    border-radius: inherit;
    position: sticky;
    top: 0;
    /* border: 1.5px solid $c-white;
     border-color: $c-white; */

    @media screen and (min-width: $tablet-breakpoint) {
        top: $magicNumber / 2;
        // border: 3px solid $c-white;
        margin: 0;
        width: 100%;
    }

    &--item {
        width: 33.333%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: $magicNumber / 1.5;
        border-right: 1.5px solid $c-white;
        border-color: $c-white;

        @media screen and (min-width: $tablet-breakpoint) {
            height: $magicNumber;
            padding: 0;
            background-color: inherit;
            border-right: 3px solid $c-white;
        }

        h2 {
            padding: 0;
            margin: 0;
            text-align: center;
            transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
            transform-style: preserve-3d;
        }

        &:after,
        &:before {
            content: none;
        }

        &:last-child {
            border-right: 0;
        }

        &.isActive {
            background-color: $c-white;
            color: $c-black;
        }
    }

    // MOBILE
    // State classes an animations

    &.isSticky {
        animation: menuCollapse__out__mobile $delay--total / 2 $t-smooth_one 1 both;
        .main-navigation--item {
            animation: menuItemCollapse__out__mobile $delay--total / 2 $t-smooth_one 1 both;
        }
    }
    &.isStatic {
        animation: menuCollapse__in__mobile $delay--total / 2 $t-smooth_one 1 both;
        .main-navigation--item {
            animation: menuItemCollapse__in__mobile $delay--total / 2 $t-smooth_one 1 both;
        }
    }
    // Keyframes for main-navigation
    // ANIMATE OUT MOBILE
    @keyframes menuCollapse__out__mobile {
        0% {
            width: 100%;
            margin-left: 0;
        }
        100% {
            width: 100vw;
            margin-left: -$magicNumber / 4;
        }
    }

    @keyframes menuItemCollapse__out__mobile {
        0% {
            height: $magicNumber / 1.5;
        }
        100% {
            height: $magicNumber / 2;
        }
    }

    // Keyframes for main-navigation
    // ANIMATE IN MOBILE

    @keyframes menuCollapse__in__mobile {
        0% {
            width: 100vw;
            margin-left: -$magicNumber / 4;
        }
        100% {
            width: 100%;
            margin-left: 0;
        }
    }

    @keyframes menuItemCollapse__in__mobile {
        0% {
            height: $magicNumber / 2;
        }
        100% {
            height: $magicNumber / 1.5;
        }
    }

    @media screen and (min-width: $tablet-breakpoint) {
        &.isStatic {
            animation: menuCollapse__out $delay--total * 1.25 $t-smooth_one 1 both;

            .main-navigation--item {
                animation: menuItemCollapse__out $delay--total * 1.25 $t-smooth_one 1 both;

                h2 {
                    animation: menuItemTextCollapse__out $delay--total * 1.25 $t-smooth_one 1 both;
                }
            }
        }

        &.isSticky {
            animation: menuCollapse__in $delay--total * 1.5 $t-smooth_one 1 both;

            .main-navigation--item {
                animation: menuItemCollapse__in $delay--total * 1.5 $t-smooth_one 1 both;

                h2 {
                    animation: menuItemTextCollapse__in $delay--total * 1.5 $t-smooth_one 1 both;
                }
            }

            &.isOpen {
                animation: menuCollapse__out $delay--total $t-smooth_one 1 both;

                .main-navigation--item {
                    animation: menuItemCollapse__out $delay--total $t-smooth_one 1 both;

                    h2 {
                        animation: menuItemTextCollapse__out $delay--total $t-smooth_one 1 both;
                        // transform: translateX(-200%);
                    }
                }
            }

            &.isClosed {
                animation: menuCollapse__in $delay--total $t-smooth_one 1 forwards;

                .main-navigation--item {
                    animation: menuItemCollapse__in $delay--total $t-smooth_one 1 both;

                    h2 {
                        animation: menuItemTextCollapse__in $delay--total $t-smooth_one 1 both;
                    }
                }
            }
        }

        // html body.cursor-on main#main section.main-container nav.main-navigation.isStatic.isOpen div.main-navigation--item.isActive h2

        &.isClosed,
        &.isOpen,
        &.isStatic,
        &.isSticky {
            .main-navigation--item {
                h2 {
                    animation-delay: $delay--total / 6;
                }

                &:nth-child(1) h2 {
                    animation-delay: $delay--total / 6 + $delay--total / 4;
                }

                &:nth-child(2) h2 {
                    animation-delay: $delay--total / 6 + $delay--total / 5;
                }

                &:nth-child(3) h2 {
                    animation-delay: $delay--total / 6 + $delay--total / 6;
                }
            }
        }
    }
}

.main-container--text-container {
    position: relative;

    section {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // display: none;
        list-style: none;
    }
}

// // Keyframes for main-navigation
// // ANIMATE IN

@keyframes menuCollapse__in {
    0% {
        top: $magicNumber / 2;
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }

    25% {
        top: $magicNumber / 2;
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }

    50% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
        border-radius: inherit;
    }

    65% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
    }

    75% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
        border-radius: 50%;
    }

    80% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        margin: 0;
        border-radius: 50%;
    }

    100% {
        top: $magicNumber / 1.5;
        margin: $magicNumber / 4 $magicNumber / 4 $magicNumber / 4 0;
        height: $magicNumber / 2;
        width: $magicNumber / 2;
        overflow: hidden;
        border-radius: 50%;
    }
}

@keyframes menuItemCollapse__in {
    0% {
        opacity: 1;
        display: block;
    }

    25% {
        opacity: 1;
        display: block;
    }

    50% {
        opacity: 1;
        border: 0;
        display: block;
    }

    75% {
        opacity: 1;
        padding: 0;
        border-width: 0;
        display: none;
    }

    100% {
        opacity: 0;
        padding: 0;
        border-width: 0;
        display: none;
    }
}
@keyframes menuItemTextCollapse__in {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
    }

    75% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }

    100% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }
}

// Keyframes for main-navigation
// ANIMATE OUT
@keyframes menuCollapse__out {
    0% {
        top: $magicNumber / 1.5;
        height: $magicNumber / 2;
        width: $magicNumber / 2;
        margin: $magicNumber / 4 $magicNumber / 4 $magicNumber / 4 0;
        overflow: hidden;
        border-radius: 50%;
    }

    20% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
        margin: 0;
        border-radius: 50%;
    }

    25% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
        border-radius: 50%;
    }

    45% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
        border-radius: inherit;
    }

    50% {
        top: $magicNumber / 2;
        height: $magicNumber;
        width: $magicNumber;
        overflow: hidden;
        border-radius: inherit;
    }

    75% {
        top: $magicNumber / 2;
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }

    100% {
        top: $magicNumber / 2;
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
}
@keyframes menuItemCollapse__out {
    0% {
        opacity: 0;
        padding: 0;
        border-width: 0;
        display: none;
    }

    25% {
        opacity: 1;
        padding: 0;
        border-width: 0;
        display: none;
    }

    50% {
        opacity: 1;
        border: 0;
        display: block;
    }

    75% {
        opacity: 1;
        height: $magicNumber;
        display: block;
    }

    100% {
        opacity: 1;
        height: $magicNumber;
        display: block;
    }
}
@keyframes menuItemTextCollapse__out {
    0% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }

    25% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }

    100% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
    }
}
;
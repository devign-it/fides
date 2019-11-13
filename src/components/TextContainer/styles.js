import styled from "styled-components";
import { breakpoints, colors, sizes, easings, delays, vars } from "../../config/variable";

export const Container = styled.ul`
    margin: 0;
    padding: 0;
    columns: 2;
    column-gap: 0;
    list-style: none;
    width: auto;
    max-width: calc(${sizes.magicNumber}* 8);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc(${sizes.magicNumber} / 2);
`;

export default Container;

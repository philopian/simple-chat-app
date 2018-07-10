import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  height: 50px;
  line-height: 50px;
  padding-left: 8px;
  padding-right: 4px;
  p {
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin: 0px;
  }
`;

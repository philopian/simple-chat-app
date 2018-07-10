import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  color: ${colors.black};
  border: solid 1px ${colors.black};
  padding: 8px;
  h3 {
    margin: 0px;
    padding-top: 8px;
    padding-left: 8px;
  }
  ul {
    margin-left: 0px;
    padding-left: 20px;
    margin-top: 8px;
    list-style-type: none;
    li {
      color: ${colors.black};
    }
  }
`;

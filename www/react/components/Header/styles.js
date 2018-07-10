import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  height: 50px;
  line-height: 50px;
  padding-left: 8px;
  padding-right: 8px;
  p {
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin: 0px;
  }
  .user-list {
    float: left;
    margin-top: 16px;
    cursor: pointer;
  }
  .user-list-window {
    float: left;
    background-color: red;
  }
  .current-user {
    float: right;
    margin-top: 16px;
    cursor: pointer;
  }
`;

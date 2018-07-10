import styled from "styled-components";
import colors from "../../constants/colors";

// Overriding styles
export const Wrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  width: 260px;
  height: 50px;
  line-height: 50px;
  padding-left: 8px;
  padding-right: 4px;
  p {
    text-transform: uppercase;
    font-weight: 300;
  }
  .message-icon {
    background-color: ${colors.grey};
    border-radius: 40px;
    width: 40px;
    height: 40px;
    text-align: center;
    float: right;
    margin-right: 4px;
    margin-top: 4px;
    i {
      font-size: 30px;
      // line-height: 36px;
    }
  }
`;

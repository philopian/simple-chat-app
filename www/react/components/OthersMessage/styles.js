import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  .arrow-left {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right: 10px solid ${colors.black};
    float: left;
    margin-top: 10px;
  }
  .content {
    padding: 8px;
    margin-left: 10px;
    background-color: ${colors.white};
    border: solid 1px ${colors.black};

    .username {
      font-weight: 600;
      color: ${colors.black};
    }
    .message {
      font-weight: 300;
      olor: ${colors.black};
    }
    .timestamp {
      color: ${colors.grey};
      float: right;
      padding-right: 4px;
      padding-bottom: 4px;
    }

    .deal-with-float {
      clear: both;
    }
  }
`;

import styled from "styled-components";

const BotFormStyled = styled.div`
  .dynamic-delete-button {
    position: relative;
    top: 8px;
    margin: 0 8px;
    color: #999;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  [data-theme="dark"] .dynamic-delete-button {
    color: rgba(255, 255, 255, 0.45);
  }
  [data-theme="dark"] .dynamic-delete-button:hover {
    color: rgba(255, 255, 255, 0.65);
  }
`;

export default BotFormStyled;

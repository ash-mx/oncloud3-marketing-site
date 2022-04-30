import styled from "styled-components";

// Media Queries
import { device } from "./devices";

export const Container = styled.section`
  width: min(97.5rem, 95%);
  margin: 0 auto;

  @media ${device.mobileL} {
    width: min(97.5rem, 90%);
  }
`;

export const Wrapper = styled.section``;

import { Rate } from "antd";
import styled from "@emotion/styled";

const MyStar = styled(Rate)`
  color: red;
  font-size: 100px;
`;

export default function LibraryIconPage() {
  return <MyStar />;
}

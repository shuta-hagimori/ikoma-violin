import styled from "styled-components";
import { ConcertHistory } from "./ConcertHistory";
import { Introduce } from "./Introduce";
import { Profile } from "./Profile";

const Box = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export function Home() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>生駒ヴァイオリン教室</h1>
      <Box>
        <Introduce />
        <Profile />
      </Box>
      <ConcertHistory />
    </div>
  );
}

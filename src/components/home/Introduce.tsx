import styled from "styled-components";

const Lesson = styled.div`
  flex-grow: 1;
  border-radius: 16;
  padding: 16px;
  text-align: left;
  margin: 16px;
`;

export function Introduce() {
  return (
    <div>
      <div style={{ marginTop: 100, textAlign: "left" }}>
        小さなお子様からシニアの方までレッスンをしています。
        <br />
        無理のないペースで続けられるようコースを設けております。
        <br />
        ・現在、ご相談のみの体験レッスンはオンラインで行っております。
        <br />
      </div>
      <div>
        <h2>レッスンコース</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Lesson style={{ backgroundColor: "#CCE5E6" }}>
            <h4 style={{ margin: 0 }}>基本コース</h4>
            月謝制 <br />
            <div>
              <span style={{ fontWeight: "bold" }}>月２回レッスン</span>
              <br />
              ２回×６０分　１０，０００円
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>月3回レッスン</span>
              <br />
              ３回×４５分　１３，５００円
              <br />
              {`   `}×６０分　１５，０００円
            </div>
          </Lesson>
          <Lesson style={{ backgroundColor: "#CCD6E6" }}>
            <h4 style={{ margin: 0 }}>基本コース</h4>
            月謝制 <br />
            <div>
              <span style={{ fontWeight: "bold" }}>月２回レッスン</span>
              <br />
              ２回×６０分　１０，０００円
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>月3回レッスン</span>
              <br />
              ３回×４５分　１３，５００円
              <br />
              {`   `}×６０分　１５，０００円
            </div>
          </Lesson>
          <Lesson style={{ backgroundColor: "#CEE6CC" }}>
            <h4 style={{ margin: 0 }}>基本コース</h4>
            月謝制 <br />
            <div>
              <span style={{ fontWeight: "bold" }}>月２回レッスン</span>
              <br />
              ２回×６０分　１０，０００円
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>月3回レッスン</span>
              <br />
              ３回×４５分　１３，５００円
              <br />
              {`   `}×６０分　１５，０００円
            </div>
          </Lesson>
        </div>
      </div>
    </div>
  );
}

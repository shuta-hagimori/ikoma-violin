import concert from "../../img/concert.jpg";

export function ConcertHistory() {
  return (
    <div style={{ backgroundColor: "#CCE6DB", width: "100%", marginTop: 16 }}>
      <div style={{ minWidth: 350, margin: "0 auto", padding: 16 }}>
        <h2>過去の発表会</h2>
        <div style={{ display: "flex" }}>
          <div>
            <img src={concert} width={300} />
          </div>
          <div style={{ textAlign: "left" }}>
            <ul style={{ marginTop: 0 }}>
              <li>2013年3月　生駒市の南コミュニティセンター＜せせらぎ＞</li>
              <li>2014年7月　平群町中央公民館</li>
              <li>2016年6月　天満橋プチエル</li>
              <li>2017年6月　平群町中央公民館</li>
              <li> 2018年7月　平群町中央公民館</li>
              <li>2019年10月　服部緑地センチュリーオーケストラハウス</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

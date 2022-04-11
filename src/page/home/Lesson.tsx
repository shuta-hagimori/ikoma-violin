import { Plan } from "../../components/Plan";

export function Lesson() {
  return (
    <div className="document slide">
      <h2 className="h2-slide">レッスンコース</h2>
      <h3>基本コース（月謝制）</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Plan number={2} range={60} price={12000} />
        <Plan number={3} range={45} price={13500} />
        <Plan number={3} range={60} price={15000} />
      </div>
      <h3>小学生以下のショートレッスン</h3>
      はじめてヴァイオリンを習うお子様の為のコースです。
      <br />
      <Plan number={3} range={30} price={11500} />
      <h3>ワンレッスンコース</h3>
      <Plan number={1} range={60} price={6000} onLesson />
      <h3>♫楽器を使っての体験レッスン３０分</h3>
      <Plan number={1} range={30} price={3000} onLesson />
      <br />
      体験レッスンでは子供用と大人用どちらも楽器の用意がございます。
      <br />
      <h2>レッスンの場所と時間について</h2>
      曜日などを固定しない1レッスン制です。
      <br />
      レッスン場所は講師自宅にて行っています。
    </div>
  );
}

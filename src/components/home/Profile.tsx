import { Button } from "@material-ui/core";
import { useCallback, useState } from "react";
import profile from "../../img/profile.jpg";

export function Profile() {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const openDetail = useCallback(() => {
    setShowDetail(true);
  }, []);

  const closeDetail = useCallback(() => {
    setShowDetail(false);
  }, []);
  return (
    <div
      style={{
        marginLeft: 16,
        borderRadius: 16,
        backgroundColor: "#f0f0f0",
        padding: 16,
        maxWidth: 350,
      }}
    >
      <h2 style={{ marginTop: 0 }}>プロフィール</h2>
      <div style={{ display: "flex" }}>
        <div>
          <img src={profile} width="150" />
        </div>
        <div style={{ marginLeft: 16, width: 200, textAlign: "left" }}>
          <h3 style={{ marginTop: 0 }}>
            <ruby>
              中屋<rt>なかや</rt> 響<rt>ひびき</rt>
            </ruby>
          </h3>
          奈良県天理市生まれ。
          {showDetail ? (
            <div style={{ fontSize: 11 }}>
              <br />
              幼少の頃より天理教音楽研究会にてヴァイオリンを岩谷悠子、渡辺美穂の各氏に師事。
              <br />
              相愛大学音楽学部を卒業後、桐朋オーケストラアカデミーにて研鑽を積む。
              <br />
              2002年日本クラシック音楽コンクール全国大会において入選。
              <br />
              PMFアカデミーやアフィニス夏の音楽祭などに出演。
              <br />
              これまでにヴァイオリンを小栗まち絵、岸邉百百雄、久合田緑の各氏に師事。
              <br />
              新日本フィルハーモニー交響楽団の契約団員などを経て、現在は日本センチュリー交響楽団ヴァイオリン奏者。
              <br />
              <br />
              <Button variant="contained" size="small" onClick={closeDetail}>
                ↑プロフィール詳細を閉じる
              </Button>
            </div>
          ) : (
            <Button
              onClick={openDetail}
              variant="contained"
              style={{ backgroundColor: "#C3E0D4" }}
            >
              ↓プロフィール詳細を表示
            </Button>
          )}
          <br />
        </div>
      </div>
      <hr />
      <h2>お知らせ</h2>
      <a
        className="twitter-timeline"
        data-lang="ja"
        data-width="350"
        href="https://twitter.com/naraikomaviolin?ref_src=twsrc%5Etfw"
      >
        Tweets by naraikomaviolin
      </a>{" "}
    </div>
  );
}

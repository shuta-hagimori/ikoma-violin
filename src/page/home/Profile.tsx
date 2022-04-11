import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import profile from "../../img/profile.jpg";

export function Profile() {
  return (
    <div className="document slide">
      <h2 className="h2-slide">プロフィール</h2>
      <div>
        <div style={{ float: "left", margin: 10 }}>
          <img src={profile} width="150" />
        </div>
        <div style={{ margin: 10, textAlign: "left" }}>
          <h3>
            <ruby>
              中屋<rt>なかや</rt> 響<rt>ひびき</rt>
            </ruby>
          </h3>
          <div style={{ fontSize: 11 }}>
            奈良県天理市生まれ。
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
            <br />
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </div>
  );
}

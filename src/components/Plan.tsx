interface Props {
  number: number;
  range: number;
  onLesson?: boolean;
  price: number;
}

export function Plan(props: Props) {
  return (
    <div className="plan">
      <div className="planTop">
        <div
          style={{
            textAlign: "center",
            width: 150,
            padding: 10,
            display: "inline-block",
          }}
        >
          {props.onLesson ? undefined : "1ヶ月"}
          {props.range}分×{props.number}回
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", overflow: "wrap" }}
        >
          {[...Array(props.number)].map((_, i) => (
            <div style={{ display: "flex" }} key={i}>
              <div style={{ width: props.range * 0.84 }} className="planRange">
                {props.range}分
              </div>
              {i !== props.number - 1 ? (
                <span style={{ marginRight: 3 }}>+</span>
              ) : undefined}
            </div>
          ))}
        </div>
      </div>
      <div className="planPrice">{props.price.toLocaleString()}円</div>
    </div>
  );
}

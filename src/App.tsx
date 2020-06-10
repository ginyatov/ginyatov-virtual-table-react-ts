import React, { useState } from "react";
interface Props {
  data: number[][];
  rowHeight: number;
  visibleRows: number;
}

function App({ data, rowHeight, visibleRows }: Props) {
  const [start, setStart] = useState(0);

  const getTopHeight = () => rowHeight * start;
  const getBottomHeight = () =>
    rowHeight * (data.length - (start + visibleRows + 1));

  const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) =>
    setStart(
      Math.min(
        data.length - visibleRows - 1,
        Math.floor(e.currentTarget.scrollTop / rowHeight)
      )
    );

  return (
    <div
      style={{ height: rowHeight * visibleRows + 1, overflow: "auto" }}
      onScroll={onScroll}
    >
      <div style={{ height: getTopHeight() }}></div>
      <table>
        <tbody>
          {data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
            <tr key={start + rowIndex} style={{ height: rowHeight }}>
              {row.map((text, colIndex) => (
                <td key={"" + start + rowIndex + colIndex}>{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }}></div>
    </div>
  );
}

export default App;

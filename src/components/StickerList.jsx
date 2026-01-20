import React from "react";
import { Sticker } from "./Sticker";

export class StickerList extends React.Component {
  state = {};

  render() {
    return (
      <ul>
        {this.props.stickersData.map((item, index) => {
          return <Sticker img={item.img} label={item.label} key={index} />;
        })}
      </ul>
    );
  }
}

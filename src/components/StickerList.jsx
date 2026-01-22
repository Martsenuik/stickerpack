import React from "react";
import { Sticker } from "./Sticker";
import { Choice } from "./Choice";
import { List } from "./Sticker.styled";

export class StickerList extends React.Component {
  state = {
    selectedLabel: "",
  };

  handleClick = (label) => {
    this.setState({ selectedLabel: label });
  };

  render() {
    return (
      <>
        <List>
          {this.props.stickersData.map((item, index) => (
            <Sticker
              img={item.img}
              label={item.label}
              key={index}
              onClick={() => this.handleClick(item.label)}
            />
          ))}
        </List>
        <Choice label={this.state.selectedLabel} />
      </>
    );
  }
}

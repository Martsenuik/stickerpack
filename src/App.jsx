import { useState } from "react";
import stickersData from "../stickers.json";
import { StickerList } from "./components/StickerList";

function App() {
  return (
    <>
      <StickerList stickersData={stickersData} />
    </>
  );
}

export default App;

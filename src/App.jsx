import { useState } from "react";
import stickers from "../stickers.json";
import { StickerList } from "./components/StickerList";

function App() {
  return (
    <>
      <StickerList stickers={stickers} />
    </>
  );
}

export default App;

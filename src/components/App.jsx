import React from "react";
import Card from "../components/Card";
import emojipedia from "../emojipedia";

function createCard(emojiDesc) {
  return (
    <Card
      key={emojiDesc.id}
      emoji={emojiDesc.emoji}
      emojiName={emojiDesc.name}
      description={emojiDesc.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

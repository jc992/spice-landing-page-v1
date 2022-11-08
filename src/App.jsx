import React from "react";
import { insertHash } from "./utils/supabaseClient";
import { Button } from "./components/Button";
import { Col, Row } from "./components/Grid";
import BackgroundVideo from "./components/BackgroundVideo";
import Logo from "./components/Logo";
import logo from "./images/spice.png";

import "./fonts/SuisseEDUIntl-Regular.otf";
import "./App.css";

function App() {
  const TEMPLATE_TEXT_FOR_TWITTER =
    "He who controls the Spice controls the Metaverse... access granted to the @spice_finance high council confirmed 🐫💫\n";
  const HASH_TAGS = "\n%23NFTs %23DeFi $SPICE\n-------------------------------\n";

  const generateHashString = () => {
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += Math.random().toString(36).substring(2, 15);
    }
    return result;
  };

  const handleClick = async () => {
    const hashString = generateHashString();
    const text = TEMPLATE_TEXT_FOR_TWITTER.concat(HASH_TAGS.concat(hashString));
    await insertHash(hashString);
    const url = `https://twitter.com/intent/tweet?text=${text}`;

    window.open(url);
  };

  return (
    <div className="App">
      <BackgroundVideo
        type="video/mp4"
        src={import.meta.env.VITE_VIDEO_URL}
      />
      <Row>
        <Col lg={12}>
          <Logo src={logo} width="450px" />
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Button onClick={async () => await handleClick()}>ENTER EARLY</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;

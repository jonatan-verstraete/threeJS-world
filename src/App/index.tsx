import { HashRouter } from "react-router-dom";

import "Styles/main.css";
import Rooms from "Pages/Rooms";
import {ErrorBoundary} from 'react-error-boundary'
import FallbackError from "Components/Html/Error/FallbackError";
import { Canvas } from "@react-three/fiber";
import RoomInstructions from "Components/Html/HtmlRoomInstructions";

/**
 * App.
 *
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {

  return (
    <>

      <RoomInstructions/>
      <ErrorBoundary
        FallbackComponent={FallbackError}
      >
          {/* <Preload all /> */}
          <HashRouter>
            <Rooms />
          </HashRouter>
        </ErrorBoundary>
    </>
  );
};

export { App };

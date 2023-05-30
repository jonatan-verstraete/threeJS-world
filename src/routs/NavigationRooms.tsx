/* eslint-disable  */
import { Navigate, Route, Routes, RoutesProps } from "react-router-dom";

import { ROOM_CONFIG } from "Configs/roomConfig"

import PageHome from "Pages/Home";
import Page404 from 'Pages/404'
import PageMaze from "Pages/RoomMaze";
import PageSpace from 'Pages/RoomSpace'
import PageDeath from "Pages/RoomDeath";
import PageDev from "Pages/Dev";


/**
 * Router for room Pages.
 *
 * @param {RoutesProps} props
 * @returns {JSX.Element}
 */
const RoomsRouting = (props: RoutesProps): JSX.Element => {

  const allPath = "*";
  const homePath = "/home"//ROOM_CONFIG.ROOM_ID.HOME;
  const rootPath = "/";


  return (
    <Routes {...props}>
      <Route element={<Navigate to={rootPath} />} path={allPath} />
      <Route element={<Navigate to={homePath} />} path={rootPath} />


      <Route
        element={<PageHome />}
        path={ROOM_CONFIG.ROOM_ID.HOME}
      />
       <Route
        element={<PageSpace />}
        path={ROOM_CONFIG.ROOM_ID.ROOM_SPACE}
      />
      <Route
        element={<PageMaze />}
        path={ROOM_CONFIG.ROOM_ID.ROOM_MAZE}
      />
      <Route
        element={<PageDeath />}
        path={ROOM_CONFIG.ROOM_ID.ROOM_DEATH}
      />

      <Route 
        element={<Page404 />} 
        path={ROOM_CONFIG.ROOM_ID.ROOM_NOT_FOUND} 
      />
      <Route 
        element={<PageDev />} 
        path={"dev"} 
      />


    </Routes>
  );
};

export { RoomsRouting };

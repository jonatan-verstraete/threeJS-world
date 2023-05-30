
import { createContext, useRef} from "react";

import { RoomsRouting } from "routs/NavigationRooms";
import { LayoutFp as Layout} from "Layouts/LayoutFp";

import { RoomConfigItem } from "Types/Room/RoomItem";
import { ROOM_CONFIG } from "Configs/roomConfig";
import { isRoomId } from "Utils/helper";

/**
 * Rooms.
 *
 * @returns {JSX.Element}
 */
const roomConfigContext = createContext<RoomConfigItem>(null!)


/**
* Seperate Room Element for a context providing all rooms
*/
const Rooms = (): JSX.Element => {
  const config = useRef<RoomConfigItem>(null!)
  const location = window.location.hash.split('/')[1]//useLocation().pathname


  // useEffect is not triggered... dont ask me. Re-render, here we come
  // useEffect(()=>{
    //if(!config.current) return

    config.current = isRoomId(location) 
                    ? ROOM_CONFIG.ROOMS[location] 
                    : ROOM_CONFIG.DefaultRoom

    document.title = `A Reality - Room ${config.current.label}`
  // },[])

  return (
    <>
      <roomConfigContext.Provider value={config.current}>
        <Layout >
          <RoomsRouting />
        </Layout>
      </roomConfigContext.Provider>
    </>
  );
};

export {roomConfigContext as RoomContext}
export default Rooms;

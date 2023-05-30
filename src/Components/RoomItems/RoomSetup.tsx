import Floor from './Floor';
import Boundaries from './Boundaries';

const RoomSetup = (args:any) => {
    return (
        <>
            {/* <RoomLighting/> */}
            <Boundaries />
            <Floor />
            {/* <RoomEffects/> */}
        </>
    );
};

export default RoomSetup
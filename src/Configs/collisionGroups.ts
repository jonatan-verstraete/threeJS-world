import { interactionGroups } from "@react-three/rapier";

export const INTERACTION_GROUPS: Readonly<any> = Object.freeze({
    /** Element specific */
    // player is group: 1, 2
    NONE: interactionGroups([0],[]),
    // player is group: 1, 2
    PLAYER: interactionGroups([1]),

    /** Elements by group */
    // elements only interacting with themselves, eg. particels
    GROUP_0: interactionGroups([0],[0]),
    // objects that can only interact with "player"
    GROUP_1: interactionGroups([2],[1]),
    // object category: group: 3
    GROUP_2: interactionGroups([3],[2])
});
  
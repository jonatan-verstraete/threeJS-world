import {Theme} from 'Types/Room/Theme'
// todo:: full theme (+matrial, images, textures...)
export namespace Themes {
    export const Light:Theme ={
        floor: {
            color: 0xffffff,
        },
        wall: {
            color: 0xffffff,
        },
        door: {
            color: 0xbbbbbb,
            // transparent:true,
            // opacity:0.2
        },
    };

    export const Gray:Theme ={
        floor: {
            color: 0x111111,
        },
        wall: {
            color: 0x555555,
        },
        door: {
            color: 0x999999,
            // transparent:true,
            // opacity:0.2
        },
    }

    export const Dark:Theme ={
        floor: {
            color: 0x111111,
        },
        wall: {
            color: 0x111111,
        },
        door: {
            color: 0x222222,
            // transparent:true,
            // opacity:0.2
        },
    }
}
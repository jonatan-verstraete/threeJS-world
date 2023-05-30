import { KeyboardControlsEntry } from "@react-three/drei";

export namespace KEYBINDINGS {
  enum CONTROLS {
    jump = "jump",
    moveBackward = "moveBackward",
    moveForward = "moveForward",
    moveLeft = "moveLeft",
    moveRight = "moveRight",
  }

  export const ESDF: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.moveBackward, keys: ["ArrowDown", "KeyD"] },
    { name: CONTROLS.moveForward, keys: ["ArrowUp", "KeyE"] },
    { name: CONTROLS.moveLeft, keys: ["ArrowLeft", "KeyS"] },
    { name: CONTROLS.moveRight, keys: ["ArrowRight", "KeyF"] },
  ];

  export const WASD: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.moveBackward, keys: ["ArrowDown", "KeyS"] },
    { name: CONTROLS.moveForward, keys: ["ArrowUp", "KeyW"] },
    { name: CONTROLS.moveLeft, keys: ["ArrowLeft", "KeyA"] },
    { name: CONTROLS.moveRight, keys: ["ArrowRight", "KeyD"] },
  ];

  export const ZQSD: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.moveBackward, keys: ["ArrowDown", "KeyS"] },
    { name: CONTROLS.moveForward, keys: ["ArrowUp", "KeyZ"] },
    { name: CONTROLS.moveLeft, keys: ["ArrowLeft", "KeyQ"] },
    { name: CONTROLS.moveRight, keys: ["ArrowRight", "KeyD"] },
  ];

  export const OTHER: Array<KeyboardControlsEntry> = [
    { name: CONTROLS.jump, keys: ["Space"] }, //
  ];

  export const AZERTY: Array<KeyboardControlsEntry> = [...ZQSD, ...OTHER];

  export const UNIVERSAL: Array<KeyboardControlsEntry> = [...ESDF, ...OTHER];

  export const QWERTY: Array<KeyboardControlsEntry> = [...WASD, ...OTHER];
}

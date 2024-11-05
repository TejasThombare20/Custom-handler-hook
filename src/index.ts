export { ModalProvider } from "./context/ModelProvider";
export { useModal } from "./context/useModal";
export type { ModalData } from "./Hooks/state/ModelContext";
export { useEditor } from "./EditorContext";

export type {
  DeviceTypes,
  EditorElement,
  Editor,
  EditorState,
  EditorAction,
  EditorContextType,
} from "./EditorContext";

import browserHooks from "./Hooks/browser/index";
import otherHooks from "./Hooks/other/index";
import stateHooks from "./Hooks/state/index";

const hooks = {
  ...browserHooks,
  ...otherHooks,
  ...stateHooks,
};

export default hooks;

import React, { useState, useEffect, useReducer } from "react";
import { ModalContext, ModalData } from "../Hooks/state/ModelContext";
import {
  EditorContext,
  EditorState,
  editorReducer,
  defaultInitialState,
} from "../EditorContext";

interface ModalProviderProps {
  children: React.ReactNode;
  editorInitialState?: Partial<EditorState>;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  editorInitialState = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData>({});
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
  const [isMounted, setIsMounted] = useState(false);

  const [editorState, editorDispatch] = useReducer(editorReducer, {
    ...defaultInitialState,
    ...editorInitialState,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<any>
  ) => {
    if (modal) {
      if (fetchData) {
        setData({ ...data, ...(await fetchData()) } || {});
      }
      setShowingModal(modal);
      setIsOpen(true);
    }
  };

  const setClose = () => {
    setIsOpen(false);
    setData({});
  };

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
      <EditorContext.Provider
        value={{ state: editorState, dispatch: editorDispatch }}
      >
        {children}
        {showingModal}
      </EditorContext.Provider>
    </ModalContext.Provider>
  );
};

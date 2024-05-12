import { DragOverlay } from '@dnd-kit/core';
import { createPortal } from 'react-dom';

interface DragOverlayPortalProps {
  children: React.ReactNode;
}

export function DragOverlayPortal(props: DragOverlayPortalProps) {
  return createPortal(<DragOverlay>{props.children}</DragOverlay>, document.body);
}

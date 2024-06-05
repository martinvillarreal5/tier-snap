import { DragOverlay, DragOverlayProps } from '@dnd-kit/core';
import { createPortal } from 'react-dom';

interface DragOverlayPortalProps extends DragOverlayProps {}

export function DragOverlayPortal(props: DragOverlayPortalProps) {
  return createPortal(<DragOverlay>{props.children}</DragOverlay>, document.body);
}

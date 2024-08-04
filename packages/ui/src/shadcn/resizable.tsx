"use client";

import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@/lib/utils";

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return <ResizablePrimitive.PanelGroup
    className={cn(
      "ui-flex ui-h-full ui-w-full data-[panel-group-direction=vertical]:ui-flex-col",
      className,
    )}
    {...props}
  />
}

const ResizablePanel = ResizablePrimitive.Panel;

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "ui-relative ui-flex ui-w-px ui-items-center ui-justify-center ui-bg-border after:ui-absolute after:ui-inset-y-0 after:ui-left-1/2 after:ui-w-1 after:ui--translate-x-1/2 focus-visible:ui-outline-none focus-visible:ui-ring-1 focus-visible:ui-ring-ring focus-visible:ui-ring-offset-1 data-[panel-group-direction=vertical]:ui-h-px data-[panel-group-direction=vertical]:ui-w-full data-[panel-group-direction=vertical]:after:ui-left-0 data-[panel-group-direction=vertical]:after:ui-h-1 data-[panel-group-direction=vertical]:after:ui-w-full data-[panel-group-direction=vertical]:after:ui--translate-y-1/2 data-[panel-group-direction=vertical]:after:ui-translate-x-0 [&[data-panel-group-direction=vertical]>div]:ui-rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle ? <div className="ui-z-10 ui-flex ui-h-4 ui-w-3 ui-items-center ui-justify-center ui-rounded-sm ui-border ui-bg-border">
        <GripVertical className="ui-h-2.5 ui-w-2.5" />
      </div> : null}
  </ResizablePrimitive.PanelResizeHandle>
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

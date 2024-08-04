import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav aria-label="breadcrumb" ref={ref} {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    className={cn(
      "ui-flex ui-flex-wrap ui-items-center ui-gap-1.5 ui-break-words ui-text-sm ui-text-muted-foreground sm:ui-gap-2.5",
      className,
    )}
    ref={ref}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    className={cn("ui-inline-flex ui-items-center ui-gap-1.5", className)}
    ref={ref}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn("ui-transition-colors hover:ui-text-foreground", className)}
      ref={ref}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    aria-current="page"
    aria-disabled="true"
    className={cn("ui-font-normal ui-text-foreground", className)}
    ref={ref}
    role="link"
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li
    aria-hidden="true"
    className={cn("[&>svg]:ui-size-3.5", className)}
    role="presentation"
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span
    aria-hidden="true"
    className={cn(
      "ui-flex ui-h-9 ui-w-9 ui-items-center ui-justify-center",
      className,
    )}
    role="presentation"
    {...props}
  >
    <MoreHorizontal className="ui-h-4 ui-w-4" />
    <span className="ui-sr-only">More</span>
  </span>
}
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

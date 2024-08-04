import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import type { ButtonProps} from "./button";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav
    aria-label="pagination"
    className={cn("ui-mx-auto ui-flex ui-w-full ui-justify-center", className)}
    role="navigation"
    {...props}
  />
}
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    className={cn("ui-flex ui-flex-row ui-items-center ui-gap-1", className)}
    ref={ref}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li className={cn("ui-", className)} ref={ref} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
}
PaginationLink.displayName = "PaginationLink";

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink
    aria-label="Go to previous page"
    className={cn("ui-gap-1 ui-pl-2.5", className)}
    size="default"
    {...props}
  >
    <ChevronLeft className="ui-h-4 ui-w-4" />
    <span>Previous</span>
  </PaginationLink>
}
PaginationPrevious.displayName = "PaginationPrevious";

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return <PaginationLink
    aria-label="Go to next page"
    className={cn("ui-gap-1 ui-pr-2.5", className)}
    size="default"
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="ui-h-4 ui-w-4" />
  </PaginationLink>
}
PaginationNext.displayName = "PaginationNext";

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span
    aria-hidden
    className={cn(
      "ui-flex ui-h-9 ui-w-9 ui-items-center ui-justify-center",
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="ui-h-4 ui-w-4" />
    <span className="ui-sr-only">More pages</span>
  </span>
}
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

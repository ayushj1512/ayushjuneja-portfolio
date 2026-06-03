import { cn } from "@/lib/utils";

export default function Container({ className, children }) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20", className)}>{children}</div>;
}

import { cn } from "../lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto px-5 sm:max-w-xl sm:px-8 md:max-w-3xl md:px-10 lg:px-12 xl:max-w-[90rem] xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Wrapper;

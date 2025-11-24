import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  classNameTitle?: string;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  classNameTitle,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:shadow-none relative overflow-hidden",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={typeof title === "string" ? title : "service image"}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      {header}

      <div className={cn("transition duration-200 group-hover/bento:translate-x-2 relative z-10", classNameTitle)}>
        {icon}
        <div className="font-sans font-bold text-slate-900 dark:text-white">
          {title}
        </div>
        {description ? (
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );
};

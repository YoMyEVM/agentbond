import React, { forwardRef, ComponentProps, SVGProps } from "react";


// Update the CardProps interface
export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  description: string;
  pfp: string | React.ComponentType<SVGProps<SVGSVGElement>>; // Accept string or React component
  href: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, pfp, href, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white bg-opacity-5 rounded-md shadow p-4 flex items-center h-full"
        {...rest}
      >
        {/* Left section: Profile Picture */}
        <div className="mr-4">
          {typeof pfp === "string" ? (
            <img
              src={pfp}
              alt={title}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            // Render as React component
            React.createElement(pfp, {
              className: "h-16 w-16 text-blue-500",
              "aria-hidden": true,
            })
          )}
        </div>

        {/* Middle section: Title and Description */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-blue-500">{title}</h3>
          <p className="mt-1 text-sm text-gray-300">{description}</p>
        </div>

        {/* Right section: Visit Link */}
        <div className="ml-4 flex-shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold tracking-wide hover:text-blue-400"
          >
            Visit
          </a>
        </div>
      </div>
    );
  }
);

export default Card;

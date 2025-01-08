import React, { forwardRef, ComponentProps, SVGProps } from "react";

export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  description: string;
  pfp: string | React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  sharePrice: string | number;
  status: "online" | "offline"; // Ensures status is strictly "online" or "offline"
}


const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, pfp, href, sharePrice, status, ...rest }, ref) => {
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
            React.createElement(pfp, {
              className: "h-16 w-16 text-blue-500",
              "aria-hidden": true,
            })
          )}
        </div>

        {/* Middle section: Title, Description, and Status */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-accent1">{title}</h3>
          <p className="mt-1 text-sm text-gray-300">{description}</p>

          {/* Status indicator */}
          <div
            className={`mt-2 ${
              status === "online" ? "text-green-500" : "text-gray-500"
            }`}
          >
            {status === "online" ? "Online" : "Offline"}
          </div>
        </div>

        {/* Right section: Share Price and Visit Button */}
        <div className="ml-4 flex-shrink-0 flex items-center space-x-4">
          <div className="text-xl text-gray-300 font-bold">
            Share Price: <span className="text-white">${sharePrice}</span>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="block w-20 h-10 bg-accent2 hover:bg-accent2 text-white font-bold rounded-md flex items-center justify-center"
          >
            Visit
          </a>
        </div>
      </div>
    );
  }
);

export default Card;

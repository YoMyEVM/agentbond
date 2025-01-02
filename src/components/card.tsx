import {
  forwardRef,
  ComponentProps,
  RefAttributes,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";

export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  description: string;
  pfp: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  href: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, pfp: Pfp, href, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white bg-opacity-5 rounded-md shadow p-4 flex items-center h-full"
        {...rest}
      >
        {/* Left section: Profile Picture */}
        <div className="mr-4">
          <Pfp className="h-16 w-16 text-blue-500" aria-hidden="true" />
        </div>

        {/* Middle section: Title, Description, and Visit Link */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-blue-500">{title}</h3>
          <p className="mt-1 text-sm text-gray-300">{description}</p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-white font-bold transition tracking-wide hover:text-blue-400"
          >
            Visit →
          </a>
        </div>

        {/* Right section: Placeholder for Chart */}
        <div className="ml-4 flex-shrink-0">
          {/* Placeholder for Chart */}
          <div className="h-16 w-16 bg-gray-700 rounded-md flex items-center justify-center">
            <span className="text-gray-400 text-xs">Chart</span>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;

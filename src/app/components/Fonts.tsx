import { cn } from "./util";

export const FontH1 = ({className, children}: any) => {
  return <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>;
};

export const FontH2 = ({className, children}: any) => {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>{children}</h2>
  );
};

export const FontP = ({className, children}: any) => {
  return (
    <p className={cn("", className)}>{children}</p>
  );
}

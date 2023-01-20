import { SVGProps } from "react";

interface Props {
  title: string;
  Icon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
}

export default function Card({ title, Icon }: Props) {
  return (
    <div className="bg-[#263673] flex justify-center items-center p-10 w-[250px] text-white hover:bg-[#324899] hover:cursor-pointer">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Icon className="h-[40px]" />
    </div>
  );
}

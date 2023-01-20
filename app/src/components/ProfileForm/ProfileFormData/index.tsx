import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { profileFormData } from "../../../mocks/formData";

interface Props {
  register: UseFormRegister<FieldValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}

export default function ProfileFormData({ register, errors }: Props) {
  const [visible, setVisible] = useState(false);
  const toggleBtn = () => {
    setVisible((visible) => !visible);
  };

  return (
    <>
      {profileFormData.map((item, index) => {
        return (
          <div key={index} className="ml-6 flex flex-col w-full">
            <label
              className="text-lg text-white font-medium"
              htmlFor={item.htmlFor}
            >
              {item.label + " *"}
            </label>
            <div className="flex items-center">
              <div className="mt-2 flex items-center justify-between w-[90%] border-[1px] rounded-lg text-gray-800 border-gray-300">
                <input
                  className={
                    item.id === "password"
                      ? "pl-[6px] p-2 w-full focus:outline-gray-400 rounded-lg"
                      : "pl-[6px] p-2 w-full focus:outline-gray-400 rounded-lg"
                  }
                  type={
                    item.type === "password"
                      ? visible
                        ? "text"
                        : "password"
                      : item.type
                  }
                  id={item.id}
                  {...register(item.register)}
                />
              </div>
              {item.id === "password" ? (
                <span
                  className="w-8 cursor-pointer mx-2 text-white mt-2"
                  onClick={toggleBtn}
                >
                  {visible ? <EyeIcon /> : <EyeSlashIcon />}
                </span>
              ) : null}
            </div>
            <span className="mb-4 mt-1 text-red-400 font-medium">
              {errors?.[`${item.id}`]?.["message"]}
            </span>
          </div>
        );
      })}
    </>
  );
}

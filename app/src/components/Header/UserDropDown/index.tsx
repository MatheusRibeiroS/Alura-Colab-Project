import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../hooks/useAuth";

interface Props {
  username?: string;
}

export default function UserDropDown({ username }: Props) {
  const [arrow, setArrow] = useState<boolean>(false);
  const navigate = useNavigate();
  const { logout } = useUserAuth();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          {open ? setArrow(true) : setArrow(false)}
          <Menu.Button className="flex justify-center items-center font-medium text-[#e8e8e8] focus:outline-none space-x-2">
            <UserCircleIcon className="w-12" />
            <p className="text-lg">{username ? username : "Usuário"}</p>
            {arrow ? (
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <ChevronLeftIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="w-36 origin-top-right overflow-hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item as={Fragment}>
                <div
                  onClick={() => navigate("/profile")}
                  className="flex gap-4 text-lg p-2 bg-gray-100 hover:bg-gray-300 text-gray-900 cursor-pointer"
                >
                  <UserIcon className="h-6 w-6 text-[#131B3AB2]" />
                  Perfil
                </div>
              </Menu.Item>
              <Menu.Item as={Fragment}>
                <div
                  onClick={() => logout()}
                  className="flex gap-4 text-lg p-2 bg-gray-100 hover:bg-gray-300 text-gray-900 cursor-pointer"
                >
                  <ArrowRightOnRectangleIcon className="h-6 w-6 text-[#131B3AB2]" />
                  Sair
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

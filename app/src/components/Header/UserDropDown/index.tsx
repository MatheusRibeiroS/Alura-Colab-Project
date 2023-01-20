import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../../mocks/menuItems";

interface Props {
  username?: string;
}

export default function UserDropDown({ username }: Props) {
  const [arrow, setArrow] = useState<boolean>(false);

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
            <Menu.Items className="w-24 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {menuItems.map((item, index) => (
                <Menu.Item key={index} as={Fragment}>
                  <Link
                    to={item.path}
                    className={
                      "rounded-md block text-lg p-2 bg-gray-100 hover:bg-gray-300 text-gray-900"
                    }
                  >
                    {item.title}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

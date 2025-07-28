import {NavLink} from "@/types/NavLink";

import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { FaBars, FaCircleXmark } from "react-icons/fa6";
import Link from "next/link";

type NavbarProps = {
    links: NavLink[];
};

export default function Navbar({links}: NavbarProps) {
    return (
        <Disclosure as="nav" className="bg-white shadow-sm fixed top-0 inset-x-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-between" style={{height: 'var(--navbar-height)'}}>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <FaBars aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <FaCircleXmark aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link href="/" className="flex shrink-0 items-center">
                            <img
                                alt="Codevibe Logo"
                                src="/codevibe-logo.png"
                                className="h-6 w-auto rounded"
                            />
                        </Link>
                        <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
                            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                            {links.map((link) => (
                                <Link href={link.href} key={link.href}
                                   className="border-transparent text-gray-600 hover:border-eminence-500 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="shrink-0 space-x-3">
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    className="relative inline-flex items-center gap-x-1.5 rounded-xl bg-background-50 px-3 py-1.5 text-sm font-semibold text-black shadow-xs hover:bg-background-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                            {/*>*/}
                            {/*    Registrieren*/}
                            {/*</button>*/}
                            <button
                                type="button"
                                className="relative inline-flex items-center gap-x-1.5 rounded-xl bg-primary-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-4">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    {links.map((link) => (
                        <DisclosureButton as={Link} href={link.href} key={link.href}
                                          className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block border-l-4 py-2 pr-4 pl-3 text-base font-medium"
                        >
                            {link.label}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

import { CpuIcon, GithubIcon, LucideLinkedin } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-background rounded-lg shadow md:px-6 md:py-8 w-full">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
                        <CpuIcon className="h-6 w-6" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">React Rooks</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 sm:mb-0 gap-2">
                        <li>
                            <Link href={"/"}>
                                <GithubIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <LucideLinkedin className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                            </Link>
                        </li>

                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" target="_blank" className="hover:underline">React Rooks™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}
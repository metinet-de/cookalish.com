import Link from 'next/link'
import {APP_PROJECT_NAME} from "../lib/constants";

export default function Header() {
    return (
        <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-8">
            <Link href="/">
                <a className="hover:underline">{APP_PROJECT_NAME}</a>
            </Link>
        </div>
    )
}

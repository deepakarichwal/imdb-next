import Link from "next/link";
import MenuItem from "./MenuItem";
import { HiMiniHome, HiMiniInformationCircle } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-300 max-w-6xl m-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={HiMiniHome} />
        <MenuItem
          title="about"
          address="/about"
          Icon={HiMiniInformationCircle}
        />
      </div>
      <Link href="/" className="flex items-center">
        <span className="text-2xl bg-amber-500 py-1 px-2 rounded-md font-bold ">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline ">Clone</span>
      </Link>
    </div>
  );
}

// Next.js component with Tailwind CSS
import Image from 'next/image';
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-[#333333] px-4 py-2 flex justify-between items-center max-w-screen h-20">
      <div className="flex items-center gap-2">
        <Image src="/logo1.jpg" alt="Chess Logo" width={25} height={25} />
        <span className="font-bold ml-2 text-white">React Rooks</span>
      </div>
      <div className="grid justify-center items-center gap-3">
        <div>
          <span className="text-white">follow on</span>
        </div>
          <div className="flex">
            <a href="#" aria-label="Instagram" className="mx-2"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="mx-2"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="mx-2"><FaYoutube /></a>
            <a href="#" aria-label="TikTok" className="mx-2"><FaTiktok /></a>
          </div>
      </div>
    </header>
  );
}

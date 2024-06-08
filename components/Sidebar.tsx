'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky left-0 top-0 h-screen w-[264px] bg-dark-1 p-6 pt-48 text-white max-sm:hidden">
      <div className="flex flex-col gap-6 overflow-y-auto">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start transition-colors duration-700',
                {
                  'bg-blue-1': isActive,
                  'hover:bg-gray-700': !isActive
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

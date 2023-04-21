'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

const items: {
  name: string;
  slug: string;
  description?: string;
  isDisabled?: boolean;
}[] = [
  {
    name: 'Home',
    slug: '/',
    description: 'Tom Hendra, sofrtware developer',
    isDisabled: false,
  },
  {
    name: 'Blog',
    slug: 'blog',
    description: "Tom's Blog",
  },
  {
    name: 'Contact',
    slug: 'contact',
    description: 'Contact Tom',
  },
];

export default function Nav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="space-y-5">
      {items.map((item) => {
        const isActive = item.slug === selectedLayoutSegments;

        return (
          <div key={item.slug}>
            {item.isDisabled ? (
              <div
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600"
                title="Coming Soon"
              >
                {item.name}
              </div>
            ) : (
              <Link
                href={`/${item.slug}`}
                className={clsx(
                  'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                  { 'text-zinc-400': !isActive, 'text-white': isActive },
                )}
              >
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

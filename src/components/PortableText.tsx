import { PortableText as BasePortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

const components = {
  types: { // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => (
      <div className="my-8">
        <img // eslint-disable-next-line @typescript-eslint/no-explicit-any
          src={urlFor(value).width(800).height(400).fit("max").auto("format").url()}
          alt={value.alt || "Blog image"}
          className="w-full rounded-lg shadow-sm"
        />
        {value.caption && (
          <p className="text-sm text-muted-foreground text-center mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold text-primary mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-primary mt-10 mb-5">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-bold text-primary mt-8 mb-4">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-xl font-bold text-primary mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-6 leading-relaxed text-foreground">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold text-primary">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href?: string };
    }) => (
      <a
        href={value?.href ?? "#"}
        className="text-primary underline hover:text-primary/80 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li className="mb-2">{children}</li>,
  },
};

import type { PortableTextBlock } from "@portabletext/types";

interface PortableTextProps {
  value: PortableTextBlock[];
}

export const PortableText = ({ value }: PortableTextProps) => {
  return <BasePortableText value={value} components={components} />;
};
import Link from "next/link";
import { CheckCircle2, ExternalLink, FileSearch, Scale } from "lucide-react";

interface ReferenceItem {
  name: string;
  url: string;
}

export function ArticleKeyPoints({ points }: { points: string[] }) {
  if (!points?.length) return null;

  return (
    <aside className="mb-10 border-y border-slate-300 bg-slate-50 px-5 py-6 md:px-7" aria-labelledby="key-points-heading">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
        <CheckCircle2 aria-hidden="true" size={17} className="text-[#a61f2d]" />
        <h2 id="key-points-heading">At a glance</h2>
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {points.map((point, index) => (
          <li key={`${point}-${index}`} className="flex gap-3 text-[15px] leading-6 text-slate-800">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a61f2d]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function ArticleReferenceDesk({
  references,
  note,
}: {
  references: ReferenceItem[];
  note?: string;
}) {
  return (
    <aside className="mt-12 border border-slate-300 bg-white p-6 md:p-8" aria-labelledby="reference-desk-heading">
      <div className="grid gap-7 md:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a61f2d]">
            <FileSearch aria-hidden="true" size={17} />
            <h2 id="reference-desk-heading">Sources & further reading</h2>
          </div>
          <p className="max-w-xl font-serif text-lg leading-7 text-slate-800">
            Follow the evidence behind the post. Direct records appear first when available, followed by authoritative data and research sources.
          </p>
          <ul className="mt-5 space-y-2">
            {references.map((reference) => (
              <li key={reference.url}>
                <Link
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-[#a61f2d]"
                >
                  {reference.name}
                  <ExternalLink aria-hidden="true" size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-slate-200 pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
            <Scale aria-hidden="true" size={17} />
            Editorial note
          </div>
          <p className="text-sm leading-6 text-slate-600">{note?.replace(/^This article/i, "This post")}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            See an error? Read our{" "}
            <Link href="/corrections-policy" className="font-semibold text-slate-900 underline underline-offset-4">
              corrections policy
            </Link>{" "}
            or{" "}
            <Link href="/contact-us" className="font-semibold text-slate-900 underline underline-offset-4">
              contact the editor
            </Link>.
          </p>
        </div>
      </div>
    </aside>
  );
}

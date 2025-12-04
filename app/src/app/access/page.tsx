import type { FC } from "react";

const AccessPage: FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-4">
      <div className="space-y-6 rounded-3xl border border-white/15 bg-slate-950/95 px-8 py-10 shadow-xl shadow-black/40">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-50">Access</h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            金尾研究室は豊洲キャンパスの研究棟にあります。見学や共同研究の打ち合わせなどで来訪される際は、事前にメールでご連絡ください。
          </p>
        </div>

        <div className="space-y-3">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200 sm:text-base">
            <li>キャンパス: 豊洲キャンパス</li>
            <li>建物: 研究棟 14階</li>
            <li>部屋: 14O32</li>
          </ul>
          <a
            href="https://www.shibaura-it.ac.jp/access/index.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            大学公式アクセス情報を見る
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;

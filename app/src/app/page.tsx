"use client";
import type { FC } from "react";
import { useState } from "react";

type Card = {
  title: string;
  description: string;
  tag: string;
};

type NewsItem = {
  date: string;
  text: string;
};

const researchCards: Card[] = [
  {
    title: "量子コンピュータ・ハードウェア",
    description:
      "量子ビットの実装や制御・読み出し、誤り要因の解析を通じて、実機の性能を高めるハードウェア設計を探ります。",
    tag: "Quantum hardware",
  },
  {
    title: "量子情報処理を支える基盤技術",
    description:
      "安定した量子計算を実現する回路・制御・数学的手法を研究し、信頼性の高い量子情報処理を目指します。",
    tag: "Devices & circuits",
  },
  {
    title: "数理モデルとシミュレーション",
    description:
      "ノイズや損失を考慮したモデル化とシミュレーションで量子デバイスの挙動を理解し、設計最適化に役立てます。",
    tag: "Modeling & simulation",
  },
];

const newsItems: NewsItem[] = [
  { date: "2025-03-05", text: "量子情報国際会議で研究成果を発表予定です。" },
  { date: "2025-02-18", text: "学部4年生の卒業研究発表会を実施しました。" },
  { date: "2024-12-02", text: "新しい計測・制御環境を整備し評価を開始しました。" },
];

const Page: FC = () => {
  const [count, setCount] = useState(24);

  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-800 via-slate-900 to-slate-950 p-[1px] shadow-2xl shadow-indigo-900/50">
        <div className="rounded-[22px] bg-slate-950/95 px-8 py-10 shadow-lg shadow-black/40 sm:px-10 sm:py-12">
          <div className="space-y-6 text-slate-50">
            <div className="space-y-3 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                Shibaura Institute of Technology
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                芝浦工業大学 量子情報基盤技術研究室
                <br />
                Quantum Computer Basic Technology Laboratory
              </h1>
              <p className="text-base text-slate-200 sm:text-lg">
                量子コンピュータ・ハードウェアの能力を最大限に引き出すための基盤技術を開拓します。
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <span className="rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-100 ring-1 ring-indigo-400/40">
                  担当教員: 金尾 太郎 / KANAO Taro
                </span>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                  キーワード: 量子コンピュータ, ハードウェア
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <a
                href="#research"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                研究テーマを見る
              </a>
              <a
                href="https://www.shibaura-it.ac.jp/faculty/laboratory/00334.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200/60 px-5 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                SIT公式ページ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">研究テーマ / Research Topics</h2>
          <p className="text-slate-300">
            量子計算を実用化するためのハードウェアと基盤技術を多角的に探究しています。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchCards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-indigo-300/60 hover:shadow-indigo-500/40"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-100 ring-1 ring-indigo-300/50">
                {card.tag}
              </span>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-lg shadow-black/40">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">研究室で学ぶ / For Students</h2>
          <p className="text-sm text-slate-300">
            本研究室は以下の学科・専攻に所属しています。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
            <li>工学部 情報・通信工学課程 情報工学コース</li>
            <li>理工学研究科 修士課程 電気電子情報工学専攻</li>
            <li>理工学研究科 博士課程 機能制御システム専攻</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-slate-950/90 p-4 shadow-inner shadow-black/30">
            <h3 className="text-sm font-semibold text-white">求めるバックグラウンド</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>・プログラミング（計測制御・データ処理）</li>
              <li>・電気・電子回路、信号処理、制御工学</li>
              <li>・量子力学・線形代数などの基礎数学</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/15 bg-slate-950/90 p-4 shadow-inner shadow-black/30">
            <h3 className="text-sm font-semibold text-white">学生の活動イメージ</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>・量子デバイスの評価とシミュレーション</li>
              <li>・制御・読み出し系の設計と実験</li>
              <li>・量子情報処理の数理モデル構築と検証</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">News / Updates</h2>
        <div className="divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/95 shadow-lg shadow-black/40">
          {newsItems.map((item) => (
            <div key={item.date} className="flex items-start gap-4 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                {item.date}
              </span>
              <p className="text-sm text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-lg shadow-black/40">
        <h2 className="text-xl font-semibold text-white">ラボ訪問希望カウンタ</h2>
        <p className="text-sm text-slate-300">
          ボタンを押して、ラボ訪問に興味があることをカウントしてみてください（データは保存されません）。
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
            className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            興味あり +1
          </button>
          <span className="text-lg font-semibold text-white">{count} 件</span>
        </div>
      </section>
    </div>
  );
};

export default Page;

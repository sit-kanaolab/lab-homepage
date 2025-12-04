import type { FC } from "react";

const ResearchPage: FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-4">
      <div className="space-y-6 rounded-3xl border border-white/15 bg-slate-950/95 px-8 py-10 shadow-xl shadow-black/40">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-50">Research</h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            金尾研究室では、量子コンピュータのハードウェアと量子情報の基盤技術を中心に、デバイスからアルゴリズムまでを一貫して探究しています。本ページでは、実験的な装置開発と計算モデルの両面から量子計算の可能性を押し広げる研究テーマをまとめています。
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">研究テーマ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
              <h3 className="text-lg font-semibold text-slate-50">
                量子コンピュータ・ハードウェア
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                超伝導量子ビットを中心に、安定した量子状態を維持するためのパッケージング、低温配線、読み出し回路を最適化します。デバイスと制御系の協調設計により、量子ビットの長寿命化とスケール拡張を目指しています。
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
              <h3 className="text-lg font-semibold text-slate-50">
                量子情報処理の基盤技術
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                高精度なゲート動作のためのキャリブレーション、エラーモデルの同定、読み出し補正など、量子計算の信頼性を底上げする技術を開発します。ハードウェアの制約を踏まえた誤り抑制やエラー緩和手法にも取り組んでいます。
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
              <h3 className="text-lg font-semibold text-slate-50">
                モデリングとシミュレーション
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                実機に近いノイズモデルを用いて量子回路を解析し、計算性能のボトルネックを定量化します。クラウド実機とシミュレータを組み合わせ、デバイス設計やアルゴリズム最適化に活用できる検証基盤を整備しています。
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
              <h3 className="text-lg font-semibold text-slate-50">
                ハイブリッド量子制御とシステム統合
              </h3>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                量子デバイスと古典制御を連携させるためのリアルタイム処理基盤やソフトウェアスタックを設計します。計測・制御・データ解析を一体化し、ラボスケールから実運用スケールへの移行を見据えたシステムアーキテクチャを検討しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;

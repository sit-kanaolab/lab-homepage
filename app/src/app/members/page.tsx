import type { FC } from "react";

const MembersPage: FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-4">
      <div className="space-y-6 rounded-3xl border border-white/15 bg-slate-950/95 px-8 py-10 shadow-xl shadow-black/40">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-50">Members</h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            金尾研究室に所属するメンバーを紹介します。量子情報の基盤技術を探究する仲間が集い、デバイス実験からシミュレーションまで多様な視点で協働しています。
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">教員</h2>
          <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
            <p className="text-lg font-semibold text-slate-50">
              金尾 太郎 / KANAO Taro
            </p>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              量子コンピュータ・ハードウェアと量子情報処理の基盤技術を専門とし、実機開発と計算モデルの橋渡しを行っています。学生との共同研究を通じて、新しい量子デバイス設計や計測手法の創出を目指しています。
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-50">大学院生</h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            2025年度のメンバー情報は準備中です。
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-50">学部生</h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            2025年度のメンバー情報は準備中です。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;

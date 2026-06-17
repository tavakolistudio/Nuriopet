import type { DosageEntry } from '@/types';

interface Props {
  entries: DosageEntry[];
  accentColor: string;
  animal: 'dog' | 'cat';
}

export default function DosageTable({ entries, accentColor, animal }: Props) {
  const isDog = animal === 'dog';

  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: accentColor }}>
            <th className="text-left px-5 py-3 text-white/80 font-semibold text-xs uppercase tracking-wider w-1/2">
              Vücut Ağırlığı
            </th>
            <th className="text-left px-5 py-3 text-white/80 font-semibold text-xs uppercase tracking-wider">
              Haftalık Doz
            </th>
            <th className="text-left px-5 py-3 text-white/80 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">
              Saşe
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {entries.map((entry, i) => (
            <tr
              key={entry.weightRange}
              className="hover:bg-white/5 transition-colors"
            >
              <td className="px-5 py-4 font-medium text-white/80">
                {entry.weightRange}
              </td>
              <td className="px-5 py-4">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold text-white"
                  style={{ background: accentColor }}
                >
                  {entry.dose}
                </span>
              </td>
              <td className="px-5 py-4 text-white/45 text-xs hidden sm:table-cell">
                {isDog
                  ? i === 0
                    ? '½ saşe (0,5 g saşeyi ikiye bölün)'
                    : i === 1
                    ? '1 saşe'
                    : i === 2
                    ? '1,5 saşe'
                    : '2 saşe'
                  : i === 0
                  ? '1 saşe'
                  : i === 1
                  ? '2 saşe'
                  : i === 2
                  ? '3 saşe'
                  : '4 saşe'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-white/[0.03] px-5 py-3 border-t border-white/8">
        <p className="text-xs text-white/40">
          <span className="font-semibold text-white/55">Not:</span> Veteriner hekiminizin önerisi olmadan günlük kullanıma geçilmemelidir. Kullanım sıklığı yalnızca veteriner önerisiyle haftada 2 keze çıkarılabilir.
        </p>
      </div>
    </div>
  );
}

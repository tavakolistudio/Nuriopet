import type { DosageEntry } from '@/types';

interface Props {
  entries: DosageEntry[];
  accentColor: string;
  animal: 'dog' | 'cat';
}

export default function DosageTable({ entries, accentColor, animal }: Props) {
  const isDog = animal === 'dog';

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
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
        <tbody className="divide-y divide-gray-100 bg-white">
          {entries.map((entry, i) => (
            <tr
              key={entry.weightRange}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-5 py-4 font-medium text-gray-800">
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
              <td className="px-5 py-4 text-gray-500 text-xs hidden sm:table-cell">
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
      <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          <span className="font-semibold">Not:</span> Veteriner hekiminizin önerisi olmadan günlük kullanıma geçilmemelidir. Kullanım sıklığı yalnızca veteriner önerisiyle haftada 2 keze çıkarılabilir.
        </p>
      </div>
    </div>
  );
}

export default function StatusCard({
  count,
  label,
  color,
}: {
  count: number;
  label: string;
  color: string;
}) {
  return (
    <div className="px-15 py-2 rounded-xl shadow-lg text-center">
      <h3 className={`text-2xl font-bold ${color}`}>{count}</h3>
      <span className={`${color} font-semibold`}>{label}</span>
    </div>
  );
}

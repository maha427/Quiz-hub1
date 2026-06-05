export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold">
        لا توجد نتائج
      </h2>

      <p className="text-slate-500 mt-2">
        حاول تغيير الفلاتر أو البحث
      </p>
    </div>
  );
}
import { Skeleton } from "@/components/ui/skeleton";

export default function QuestionBankSkeleton() {
  return (
    <div className="rounded-3xl border bg-white p-5 space-y-5">
      <Skeleton className="h-2 w-full" />

      <Skeleton className="h-5 w-20" />

      <Skeleton className="h-7 w-40" />

      <Skeleton className="h-16 w-full" />

      <div className="flex justify-between">
        <Skeleton className="h-5 w-20" />

        <Skeleton className="h-5 w-24" />
      </div>
    </div>
  );
}
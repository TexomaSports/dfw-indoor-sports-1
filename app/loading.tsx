export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-dfw-red animate-spin"></div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  )
}

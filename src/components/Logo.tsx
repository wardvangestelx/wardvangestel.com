export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <span className="text-4xl font-bold tracking-tighter text-black">
          WVG
        </span>
        <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-black" />
      </div>
    </div>
  );
}

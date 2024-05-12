interface TierHeaderProps {
  children: React.ReactNode;
}

export function TierHeader(props: TierHeaderProps) {
  return (
    <div className="mb-5 flex items-center rounded bg-zinc-900 p-4 text-2xl text-white">
      {props.children}
    </div>
  );
}

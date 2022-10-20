interface PartnerProps {
  url: string;
  alt: string;
}

export function Partner(props: PartnerProps) {
  return (
    <div className="flex items-center justify-center p-5 border border-[#0047231a] rounded-2xl shadow-md">
      <img className="w-52 h-52" src={props.url} alt={props.alt} />
    </div>
  );
}

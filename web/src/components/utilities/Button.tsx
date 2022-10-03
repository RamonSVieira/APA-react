interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return (
    <a
      href=""
      className="hidden px-4 py-3 font-semibold text-xl text-black uppercase bg-button rounded-lg transition duration-200 hover:bg-button-hover lg:inline-block"
    >
      {props.title}
    </a>
  );
}

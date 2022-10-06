interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return (
    <a
      href=""
      className="inline-block px-4 py-3 font-semibold text-xl text-black uppercase bg-button rounded-lg transition duration-200 hover:bg-button-hover text-center"
    >
      {props.title}
    </a>
  );
}

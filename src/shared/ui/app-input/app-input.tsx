interface IAppInputProps {
  value?: string;
  className?: string;
  placeholder?: string;
}

export default function AppInput(props: IAppInputProps) {
  const { className, value, placeholder } = props;

  return (
    <input
      placeholder={placeholder}
      className={`${className} block w-full bg-secondary placeholder-primary rounded-xl pl-10 py-3`}
      value={value}
    />
  );
}

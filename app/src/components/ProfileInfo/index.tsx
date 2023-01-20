interface Props {
  name: string;
  email: string;
}

export default function ProfileInfo({ name, email }: Props) {
  return (
    <div className="ml-4 mt-8 flex flex-col space-y-4">
      <section className="flex font-medium text-xl text-white">
        <p>Nome: {name}</p>
      </section>
      <section className="flex font-medium text-xl text-white">
        <p>E-mail: {email}</p>
      </section>
    </div>
  );
}

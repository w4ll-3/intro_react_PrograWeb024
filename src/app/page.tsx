import Button from "@/components/Button";

export default function Home() {
  const names = ["Pepito", "Juanito", "Fernandita", "Luisito"];
  return (
    <main>
      <h1>Hello World</h1>
      <ul>
        <li>Primer punto</li>
        <li>Segundo punto</li>
        <li>tercer punto</li>
      </ul>
      <div className="flex flex-col justify-start items-start">
        <Button name="Juanito">Hola Juanito</Button>
        <Button name="Fernandita">Hola Fernandita</Button>
        <Button name="Luisito">Hola Luisito</Button>
        <Button name="Pepito">Hola Pepito</Button>
      </div>

    </main>
  );
}

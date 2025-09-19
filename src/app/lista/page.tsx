import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table";

const miembros = [
  { nombre: "Daniela", baño: 5, limpieza: "Sí" },
  { nombre: "Lucia", baño: 4, limpieza: "Sí" },
]

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen py-4">
      <div className="w-1/2 mx-auto text-left">
        <h1 className="text-5xl font-semibold">Limpieza de la peña</h1>
        <div className="flex flex-col items-center my-5 p-4 border rounded-lg">
          <h3 className="text-2xl font-semibold">Los elegidos de esta semana son:</h3>
          <p className="text-blue-600 text-6xl font-semibold">Daniela y Lucia</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead className="w-[200px]">Veces al baño</TableHead>
              <TableHead className="w-[100px]">¿Ha limpiado?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {miembros.map((miembro) => (
              <TableRow key={miembro.nombre}>
                <TableCell>{miembro.nombre}</TableCell>
                <TableCell>{miembro.baño}</TableCell>
                <TableCell>{miembro.limpieza}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;

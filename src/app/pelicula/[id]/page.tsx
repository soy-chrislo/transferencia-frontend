import Image from "next/image";
import { peliculas } from "@/data";

export async function generateStaticParams() {
	return peliculas.map((p) => ({
		id: p.id.toString(),
	}));
}

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function Page(props: PageProps) {
	const params = await props.params;
	const id = params.id;

	const pelicula = peliculas.find((p) => p.id === Number.parseInt(id));

	if (!pelicula) {
		return <p>Película no encontrada</p>;
	}

	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-grow p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<div className="max-w-4xl mx-auto">
					<Image
						src={pelicula.imagenUrl}
						alt={pelicula.titulo}
						width={400}
						height={600}
						className="rounded-md"
					/>
					<h1 className="text-4xl font-bold mt-4">{pelicula.titulo}</h1>
					<p className="text-sm text-gray-600">{pelicula.anio}</p>
					<p className="mt-2">{pelicula.descripcion}</p>
					<p className="mt-2 font-semibold">Director: {pelicula.director}</p>
					<p className="mt-2">Género: {pelicula.genero}</p>
					<p className="mt-2">Duración: {pelicula.duracion} minutos</p>
					<p className="mt-2">Calificación: {pelicula.calificacion}/10</p>
				</div>
			</main>
		</div>
	);
}

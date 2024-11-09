import type { Pelicula } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface CardProps extends Pelicula {}

export default function Card({
	id,
	titulo,
	anio,
	descripcion,
	director,
	genero,
	duracion,
	calificacion,
	imagenUrl,
}: CardProps) {
	return (
		<Link href={`/pelicula/${id}`}>
			<div className="border p-4 rounded-lg shadow-lg max-w-xs">
				<div className="w-full h-[260px] overflow-hidden rounded-md flex justify-center">
					<Image
						src={imagenUrl}
						alt={titulo}
						width={180}
						height={270}
						className="rounded-md"
					/>
				</div>
				<h2 className="text-xl font-semibold mt-4">{titulo}</h2>
				<p className="text-sm text-gray-600">{anio}</p>
				<p className="mt-2">{descripcion}</p>
				<p className="mt-2 font-semibold">Director: {director}</p>
				<p className="mt-2">Género: {genero}</p>
				<p className="mt-2">Duración: {duracion} minutos</p>
				<p className="mt-2">Calificación: {calificacion}/10</p>
			</div>
		</Link>
	);
}

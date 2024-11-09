import Card from "@/components/MovieCard";
import { peliculas } from "@/data";
import type { Pelicula } from "@/data";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="text-4xl font-bold">Películas</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{peliculas.map((pelicula: Pelicula) => (
						<Card
							key={pelicula.id}
							id={pelicula.id}
							titulo={pelicula.titulo}
							anio={pelicula.anio}
							descripcion={pelicula.descripcion}
							director={pelicula.director}
							genero={pelicula.genero}
							duracion={pelicula.duracion}
							calificacion={pelicula.calificacion}
							imagenUrl={pelicula.imagenUrl}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

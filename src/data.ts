interface Pelicula {
	id: number;
	titulo: string;
	descripcion: string;
	anio: number;
	director: string;
	genero: string;
	duracion: number;
	calificacion: number;
	imagenUrl: string;
}

const peliculas: Pelicula[] = [
	{
		id: 1,
		titulo: "El Padrino",
		descripcion: "La historia de la familia Corleone.",
		anio: 1972,
		director: "Francis Ford Coppola",
		genero: "Crimen, Drama",
		duracion: 175,
		calificacion: 9.2,
		imagenUrl: "https://pics.filmaffinity.com/El_padrino-993414333-large.jpg",
	},
	{
		id: 2,
		titulo: "El Caballero Oscuro",
		descripcion: "Batman se enfrenta al Joker.",
		anio: 2008,
		director: "Christopher Nolan",
		genero: "Acción, Crimen, Drama",
		duracion: 152,
		calificacion: 9.0,
		imagenUrl:
			"https://pics.filmaffinity.com/the_dark_knight-102763119-mmed.jpg",
	},
	{
		id: 3,
		titulo: "Pulp Fiction",
		descripcion: "Historias entrelazadas de crimen en Los Ángeles.",
		anio: 1994,
		director: "Quentin Tarantino",
		genero: "Crimen, Drama",
		duracion: 154,
		calificacion: 8.9,
		imagenUrl:
			"https://m.media-amazon.com/images/S/pv-target-images/ca8d07a3b816fd3b82ca55b75e7407e9f34e7a2f9cd822e41de39f35eaf8c49f.jpg",
	},
];

export { type Pelicula, peliculas };

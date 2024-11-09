export default function Footer() {
	return (
		<footer className="w-full bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-center">
				<p>
					&copy; {new Date().getFullYear()} Chrislo Movies. Todos los derechos
					reservados.
				</p>
			</div>
		</footer>
	);
}

import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Inicio" },
	{ href: "/contacto", label: "Contacto" },
];

export const NavigationBar = () => {
	return (
		<nav className="w-full bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					<div className="text-2xl font-bold">Chrislo Movies</div>
				</Link>
				<div className="flex space-x-4">
					{navLinks.map((link) => (
						<Link key={link.href} href={link.href}>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

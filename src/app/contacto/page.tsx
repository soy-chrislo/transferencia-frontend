// FILE: pages/contacto.tsx
import { NavigationBar } from "@/components/NavigationBar";

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-grow p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<h1 className="text-4xl font-bold text-center mb-8">Contacto</h1>
				<div className="max-w-4xl mx-auto space-y-8">
					<section>
						<h2 className="text-2xl font-semibold">Correo Electrónico</h2>
						<p className="mt-2">
							Puedes contactarnos a través de nuestro correo electrónico:{" "}
							<a
								href="mailto:contacto@chrislomovies.com"
								className="text-blue-500"
							>
								contacto@chrislomovies.com
							</a>
						</p>
					</section>
					<section>
						<h2 className="text-2xl font-semibold">Teléfono</h2>
						<p className="mt-2">
							Llámanos al:{" "}
							<a href="tel:+1234567890" className="text-blue-500">
								+1 234 567 890
							</a>
						</p>
					</section>
					<section>
						<h2 className="text-2xl font-semibold">Ubicación Física</h2>
						<p className="mt-2">Visítanos en nuestra oficina:</p>
						<p className="mt-2">123 Calle Falsa, Ciudad, País</p>
					</section>
					<section>
						<h2 className="text-2xl font-semibold">Formulario de Contacto</h2>
						<form className="mt-4 space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Nombre
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Correo Electrónico
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									Mensaje
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
									required
								/>
							</div>
							<div>
								<button
									type="submit"
									className="bg-blue-500 text-white px-4 py-2 rounded-md"
								>
									Enviar
								</button>
							</div>
						</form>
					</section>
				</div>
			</main>
		</div>
	);
}

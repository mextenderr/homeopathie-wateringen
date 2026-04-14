export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text text-cream py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
          Ilonka de Vos
        </h3>
        <p className="text-cream-dark text-sm md:text-base mb-4">
          Homeopathisch Arts &amp; Coach
        </p>
        <p className="text-warm-light/70 text-sm">
          Momenteel geen nieuwe aanmeldingen
        </p>
        <div className="mt-8 pt-6 border-t border-white/10 text-text-light text-xs">
          &copy; {year} Ilonka de Vos. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}

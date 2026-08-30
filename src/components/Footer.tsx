export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-[var(--fg-muted)] sm:flex-row">
        <span>© {new Date().getFullYear()} Esdras Brito. Todos os direitos reservados.</span>
        <span className="mono-caption">EB CODEX</span>
      </div>
    </footer>
  )
}

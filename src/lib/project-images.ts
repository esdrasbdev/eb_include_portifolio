// Importa qualquer imagem existente em src/assets/projects/ (lazy).
// Se o arquivo referenciado em projects.ts ainda não existir, retorna undefined
// e o ProjectCard mostra um placeholder no lugar.
const modules = import.meta.glob('/src/assets/projects/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byFileName: Record<string, string> = {}
for (const path in modules) {
  const fileName = path.split('/').pop()!
  byFileName[fileName] = modules[path]
}

export function getProjectImage(fileName?: string): string | undefined {
  if (!fileName) return undefined
  if (byFileName[fileName]) return byFileName[fileName]
  // tenta encontrar a mesma base com outra extensão
  const base = fileName.replace(/\.[^.]+$/, '')
  const match = Object.keys(byFileName).find((f) => f.startsWith(base + '.'))
  return match ? byFileName[match] : undefined
}

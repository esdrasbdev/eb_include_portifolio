import { SectionHeading } from '@/components/shared/SectionHeading'
import { PROJECTS } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { EbCodexBlock } from './EbCodexBlock'

export function Projects() {
  return (
    <section id="projetos" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          label="Trabalho selecionado"
          title="Produtos, sistemas e experiências digitais que construí."
          subtitle="Sistemas reais, construídos com atuação completa — da interface à infraestrutura."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-6">
          <EbCodexBlock />
        </div>
      </div>
    </section>
  )
}

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/projects'

function Project({ project }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/projects/${project.slug}`}>
          {project.name}
        </Card.Title>
        <Card.Description>{project.description}</Card.Description>
        <Card.Cta>View project</Card.Cta>
      </Card>
    </article>
  )
}

export const metadata = {
  title: 'Projects',
  description: "These are a few things I've made throughout my career.",
}

export default async function ProjectsIndex() {
  let projects = await getAllProjects()

  return (
    <SimpleLayout
      title="These are a few things I've made throughout my career."
      intro="I've worked on tons of little projects over the years but these are a few I'm most proud of."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {projects.map((project) => (
            <Project key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

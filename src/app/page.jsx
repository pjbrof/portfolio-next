import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoJohnHancock from '@/images/logos/jh.svg'
import logoProjectFinance from '@/images/logos/projectfinance.jpeg'
import logoJJill from '@/images/logos/jjill.svg'
import logoBiogen from '@/images/logos/biogen.svg'
import logoInternet4Associations from '@/images/logos/i4a.png'
import { getAllProjects } from '@/lib/projects'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ComputerDesktopIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <Card href={`/projects/${project.slug}`}>
      <Card.Title>{project.name}</Card.Title>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>Learn more</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div
        className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        style={{ backgroundColor: role.hexColor }}
      >
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Project Finance',
      title: 'Senior Software Engineer',
      logo: logoProjectFinance,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      hexColor: '#1D67BC',
    },
    {
      company: 'John Hancock',
      title: 'Senior Front-End Engineer',
      logo: logoJohnHancock,
      start: '2016',
      end: '2021',
      hexColor: '#FFFFFF',
    },
    {
      company: 'Biogen',
      title: 'Front-End Engineer and Consultant',
      logo: logoBiogen,
      start: '2016',
      end: '2017',
      hexColor: '#FFFFFF',
    },
    {
      company: 'J.Jill',
      title: 'Web Application Developer',
      logo: logoJJill,
      start: '2015',
      end: '2015',
      hexColor: '#FFFFFF',
    },
    {
      company: 'Internet 4 Associations (Co-op)',
      title: 'Web Developer',
      logo: logoInternet4Associations,
      start: '2012',
      end: '2015',
      hexColor: '#FFFFFF',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/patrick_brophy_resume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
        download
        target="_blank"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  let projects = await getAllProjects()
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Patrick Brophy
          </h1>
          <h2 className="dark:text-zinc-00 text-2xl font-bold tracking-tight text-zinc-500 uppercase">
            Front-End Engineer
          </h2>
          <p className="mt-6 text-base text-zinc-500 dark:text-zinc-100">
            With over 10 years of experience in FinTech, e-commerce, and Pharma
            industries, I specialize in scalable design systems, UI/UX,
            accessibility, and animation. Proficient in React and Vue, I build
            high-performance, user-centric applications with seamless
            interactions and dynamic animations to enhance engagement.
            Passionate about clean code, design consistency, and modern web
            standards, I thrive in collaborative environments that prioritize
            innovation and scalability.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/pjbrof"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/pjbrof"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="mb-8 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <ComputerDesktopIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Projects</span>
              </h2>
              {projects.map((project, index) => (
                <>
                  <Project key={project.slug} project={project} />
                  <div className="h-6" />
                  {index !== projects.length - 1 && (
                    <>
                      <hr className="text-zinc-300" />
                      <div className="h-6" />
                    </>
                  )}
                </>
              ))}
            </div>
          </div>

          <Resume />
        </div>
      </Container>
    </>
  )
}

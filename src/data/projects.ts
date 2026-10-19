export type Project = {
  name: string
  description: string
  screenshot: string
  screenshotAlt: string
  technologies: string[]
  demoUrl?: string
  repositoryUrl?: string
}

// Adicione somente projetos reais e autorizados para divulgação.
export const projects: Project[] = []

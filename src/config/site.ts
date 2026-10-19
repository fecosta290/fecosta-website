export const siteConfig = {
  brand: 'FE COSTA',
  owner: 'André Felipe da Costa',
  role: 'Desenvolvedor de Software',
  whatsapp: '5512981070102',
  whatsappMessage: 'Olá! Conheci a FE COSTA pelo site e gostaria de solicitar um orçamento.',
  email: 'devdre010@gmail.com',
  instagram: 'https://www.instagram.com/fecostadev/',
  linkedin: 'https://www.linkedin.com/in/andr%C3%A9-felipe-353260243/',
  repository: 'https://github.com/fecosta290/fecosta-website',
} as const

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const

export function getWhatsAppUrl() {
  const number = siteConfig.whatsapp.replace(/\D/g, '')
  if (!number) return '#contato'
  return `https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
}

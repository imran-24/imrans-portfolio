import { PageInfo, Project, Skill, Social } from "@/typings"


export const fetchSocials = async() => {
    const res = await fetch(`https://intern-portfolio.sanity.studio/api/social`, {cache: 'force-cache'})
    const data = await res.json()
    const socials: Social[] = data.socials
    return socials
}

export const fetchSkills = async() => {
    const res = await fetch(`https://intern-portfolio.sanity.studio/api/skill`, {cache: 'force-cache'})
    const data = await res.json()
    const skills: Skill[] = data.skills
    return skills
}

export const fetchProjects = async() => {
    const res = await fetch(`https://intern-portfolio.sanity.studio/api/projects`, {cache: 'force-cache'})
    const data = await res.json()
    const projects: Project[] = data.projects
    return projects
}

export const fetchPageInfo = async() => {
    const res = await fetch(`https://intern-portfolio.sanity.studio/api/pageInfo`, {cache: 'force-cache'})
    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo
    return pageInfo
}

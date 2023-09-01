import { PageInfo, Project, Skill, Social } from "@/typings"


export const fetchSocials = async() => {
    const res = await fetch(`/api/social`)
    const data = await res.json()
    const socials: Social[] = data.socials
    return socials
}

export const fetchSkills = async() => {
    const res = await fetch(`/api/skill`)
    const data = await res.json()
    const skills: Skill[] = data.skills
    return skills
}

export const fetchProjects = async() => {
    const res = await fetch(`/api/projects`)
    const data = await res.json()
    const projects: Project[] = data.projects
    return projects
}

export const fetchPageInfo = async() => {
    const res = await fetch(`/api/pageInfo`)
    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo
    return pageInfo
}

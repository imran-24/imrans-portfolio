import { PageInfo, Project, Skill, Social } from "@/typings"


export const fetchSocials = async() => {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/social`)
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json()
    const socials: Social[] = data.socials
    return socials
}

export const fetchSkills = async() => {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/skill`)
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json()
    const skills: Skill[] = data.skills
    return skills
}

export const fetchProjects = async() => {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/projects`)
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json()
    const projects: Project[] = data.projects
    return projects
}

export const fetchPageInfo = async() => {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/pageInfo`)
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo
    return pageInfo
}

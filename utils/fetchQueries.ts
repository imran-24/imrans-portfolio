import getDomain from "@/app/libs/getDomain";
import { PageInfo, Project, Skill, Social } from "@/typings"

const domain = getDomain();

export const fetchSocials = async() => {
    const endpoint = `${domain}/api/social`
    const res = await fetch(endpoint, { cache: "no-cache"})
    
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    if(res.headers.get("content-type") !== "application/json") {
        return null
    }
    const data = await res.json()
    const socials: Social[] = data.socials
    return socials
}

export const fetchSkills = async() => {
    const endpoint = `${domain}/api/skill`
    const res = await fetch(endpoint, { cache: "no-cache"})
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    if(res.headers.get("content-type") !== "application/json") {
        return null
    }
    const data = await res.json()
    const skills: Skill[] = data.skills
    return skills
}

export const fetchProjects = async() => {
    const endpoints = `${domain}/api/projects`
    const res = await fetch(endpoints, { cache: "no-cache"})
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    if(res.headers.get("content-type") !== "application/json") {
        return null
    }
    const data = await res.json()
    const projects: Project[] = data.projects
    return projects
}

export const fetchPageInfo = async() => {
    const endpoint = `${domain}/api/pageInfo`
    const res = await fetch(endpoint, { cache: "no-cache"})
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }  
    if(res.headers.get("content-type") !== "application/json") {
        return null
    }
    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo
    return pageInfo
}

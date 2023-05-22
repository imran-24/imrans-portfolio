interface SanityBody{
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string
}

interface Image{
  _type: 'image',
  asset:{
    _ref: string;
    _type: "reference"
  };
}

export interface PageInfo extends SanityBody{
  _type: 'pageInfo';
  name: string;
  role: string;
  heroImage: Image;
  backgroundInfo: string;
  profilePic: Image;
  phoneNumber: string;
  email: string;
  address: string;
  socials: Social[]
}

export interface Technology extends SanityBody{
  _type: 'skill';
  image: Image;
  title: string;
}

export interface Skill extends SanityBody{
  _type: 'skill';
  image: Image;
  title: string;
}

export interface Project extends SanityBody{
  _type: 'project';
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody{
  _type: 'social';
  title: string;
  url: string
}




export interface Post extends SanityBody{
  caption: string;
  comment: Comment[],
  likes: User[];
  postedBy: User;
  topic: string;
  userId: string;
  video: Video;
     
}



import NextAuth from "next-auth";

declare module "next-auth" {
interface Session {
  user: {
    uid: string;
    username: string;
    name: string;
    email: string;
    role: string;
    [key: string]: string;
  };
}
}
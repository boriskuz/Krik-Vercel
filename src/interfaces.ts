export interface SuccessNumbersI {
  projects: string;
  volunteers: string;
  partners: string;
}

export interface PartnerI {
  id: string;
  partner: string;
  img: string;
}

export interface BoardMemberI {
  id: string;
  fullName: string;
  workingPosition: string;
  img: string;
  description: string;
}

export interface OurTeam extends BoardMemberI {
  linkedIn: string;
}

export interface Volunteer {
  id: string;
  img: string;
  fullName: string;
  age: number;
  location: string;
  about: string;
  project1: string;
  project2: string;
  project3: string;
}

export interface FAQI {
  id: string;
  question: string;
  answer: string;
  bsPosition: string;
}

export interface ServiceLink {
  id: string;
  title: string;
  description: string;
  query: string;
}

export interface ServiceI {
  id: string;
  title: string;
  description: string;
  img1: string;
  img1Alt: string;
  img2: string;
  img2Alt: string;
  img3: string;
  img3Alt: string;
  img4: string;
  img4Alt: string;
  img5: string;
  img5Alt: string;
  service: string;
}

export interface ProjectI {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  title: string;
  title_about: string;
  goal_title: string;
  goal_description1: string;
  goal_description2: string;
  goal_description3: string;
  goal_description4: string;
  project_for: string;
  project_for_description: string;
  project_status: string;
  project_completition: string;
  startDate: string;
  endDate: string | null;
}

export interface ProjectsPaginationData {
  first: number;
  prev: null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: ProjectI[];
}

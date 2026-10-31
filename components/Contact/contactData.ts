export interface SocialLink {
  name: string;
  url: string;
  username: string;
  description: string;
}

export const CONTACT_DETAILS = {
  name: "Rishav Raj Prasad",
  role: "Specialist Programmer @ Infosys",
  status: "Open to exciting opportunities & collaborations",
  email: "rishavrajprasad4@gmail.com",
  location: "India",
  timezone: "IST (UTC+5:30)",
  github: "https://github.com/Rishavrajprasad",
  linkedin: "https://www.linkedin.com/in/rishavrajprasad",
  leetcode: "https://leetcode.com/rishavrajprasad",
  resumePath: "/resume.pdf",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: CONTACT_DETAILS.github,
    username: "@Rishavrajprasad",
    description: "Open-source projects & codebases",
  },
  {
    name: "LinkedIn",
    url: CONTACT_DETAILS.linkedin,
    username: "in/rishavrajprasad",
    description: "Professional updates & network",
  },
  {
    name: "LeetCode",
    url: CONTACT_DETAILS.leetcode,
    username: "rishavrajprasad",
    description: "Data structures & algorithms mastery",
  },
];


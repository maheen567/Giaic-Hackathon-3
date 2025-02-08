interface BlogData {
    id: number
    image: any
    title: string
    description: string
    comments: number
    category: string
}

export const blog:BlogData[] = [
  {
    id: 1,
    image: "/homePhotos/blog_1.jpeg",
    title: "10 February 2022",
    description: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    comments: 4,
    category: 'Food'
  },
  {
    id: 2,
    image: "/homePhotos/blog_2.jpeg",
    title: "10 April 2023",
    description: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    comments: 3,
    category: 'Food'
  },
  {
    id: 3,
    image: "/homePhotos/blog_3.jpeg",
    title: "10 May 2024",
    description: "Curabitur rutrum velit ac congue malesuada",
    comments: 8,
    category: 'Food'
  },
];


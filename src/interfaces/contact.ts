export interface ContactAttributes {
  team_title: string;
  team_description: string;
  team: Team[];
}

export interface Team {
  name: string;
  description: string;
  position: string;
  image: string;
}

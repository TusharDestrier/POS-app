export const data: RoleMasterData[] = [
    {
      id: "1",
      role: "Administrator",
    },
    {
      id: "2",
      role: "Editor",
    },
    {
      id: "3",
      role: "Viewer",
    },
    {
      id: "4",
      role: "Contributor",
    },
    {
      id: "5",
      role: "Moderator",
    },
  ];
  
  export type RoleMasterData = {
    id: string; // Unique identifier
    role: string; // Role name
  };
  
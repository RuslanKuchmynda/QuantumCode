export const getBadgeColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-primary-green hover:bg-primary-green";
    case "Medium":
      return "bg-primary-yellow hover:bg-primary-yellow";
    case "Hard":
      return "bg-destructive hover:bg-destructive";
  }
};

type Owner = {
  login: string;
  avatar_url: string;
};

type Repo = {
  name: string;
  owner: Owner;
  stargazers_count: number;
  language: string;
  forks: number;
  created_at: string;
  updated_at: string;
  svn_url: string;
};

export default Repo;

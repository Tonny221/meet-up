type Meet = {
  id: string;
  title: string;
  description: string;
  image: string;
  creat_at: string;
  location: {
    id: string;
    country: string;
    state: string;
    district: string;
    street: string;
    number: number;
    complement: string;
    meetId: string;
  };
};

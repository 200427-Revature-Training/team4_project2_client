export interface Event {
  id: number;
  title: string;
  image: string;
  price: number;
  startTime: Date;
  maxPeople: number;
  description: string;
  eventType: {
    id: number;
    eventType: string;
  };
}

export interface Post {
  id: number;
  image: string;
  postContent: string;
  creationTime: Date;
  user: {
    id: number;
    username: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface Comment {
  id: number;
  image: string;
  commentContent: string;
  creationTime: Date;
  user: {
    id: number;
    username: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

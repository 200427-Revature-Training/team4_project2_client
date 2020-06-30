export interface Event {
  id: number;
  description: string;
  image: string;
  maxPeople: number;
  price: number;
  startTime: Date;
  title: string;
  eventTypeId: number;
  hostId: number;
}

export interface Post {
  id: number;
  postContent: string;
  creationTime: Date;
  image: string;
  eventId: number;
  userId: number;
}

export interface Comment {
  id: number;
  commentContent: string;
  creationTime: Date;
  image: string;
  postId: number;
  userId: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
  photoUrl?: string;
  designation?: string;
  title: string;
}

export interface Client {
  _id: string;
  name: string;
  email: string;
  photoUrl?: string;
  title?: string;
  company?: string;
}

export type ProjectStatus = "active" | "inactive" | "completed";

export type ProjectCollaboratorRole = "owner" | "collaborator";

export interface ProjectCollaborator {
  userId: User["_id"];
  role: ProjectCollaboratorRole;
}

export interface Project {
  _id: string;
  title: string;
  subtitle?: string;
  description?: string;
  status: ProjectStatus;
  budget: number;
  isPaid: boolean;
  chatId: string;
  client: {
    _id?: Client["_id"];
    name: Client["name"];
  };
  createdAt: Date;
  orderedAt: Date;
  deliverAt: Date;
  startedAt?: Date;
  completedAt?: Date;

  owner: User["_id"];
  collaborators?: ProjectCollaborator[];
  milestones?: {
    _id: Milestone["_id"];
  }[];
  billings?: {
    _id: Billing["_id"];
  }[];
}

export type MilestoneStatus = "completed" | "incomplete";

export interface Milestone {
  _id: string;
  title: string;
  description?: string;
  status: MilestoneStatus;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  collaborators?: { _id: User["_id"] }[];
  tasks?: { _id: Task["_id"] }[];
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  milestoneId: Milestone["_id"];
  status: "completed" | "incomplete";
  startedAt?: Date;
  completedAt?: Date;
  collaborators?: { _id: User["_id"] };
}

export interface Billing {
  _id: string;
  title: string;
  description?: string;
  clientId: Client["_id"];
  projectId: Project["_id"];
  amount: number;
  issueAt: Date;
  isPaid: boolean;
  paidAt?: Date;
}

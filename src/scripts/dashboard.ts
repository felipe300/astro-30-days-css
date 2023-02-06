const Extension = {
  svg: "svg",
  jpg: "jpg",
  png: "png",
} as const

const Status = {
  progress: "progress",
  approved: "approved",
  review: "review",
  waiting: "waiting"
} as const


export type ExtensionLevel = keyof typeof Extension
export type TaskStatus = keyof typeof Status

type List = {
  svg: string
  text: string
  ext: ExtensionLevel
}

export const actionList: List[] = [
  { svg: "inbox", text: "Inbox", ext: "svg" },
  { svg: "star", text: "Today", ext: "svg" },
  { svg: "calendar", text: "Upcomming", ext: "svg" },
  { svg: "hash", text: "Important", ext: "svg" },
  { svg: "users", text: "Meetings", ext: "svg" },
  { svg: "trash", text: "Trash", ext: "svg" },
]

export const categoryList: List[] = [
  { svg: "users", text: "Family", ext: "svg" },
  { svg: "sun", text: "Vacation", ext: "svg" },
  { svg: "trending", text: "Festival", ext: "svg" },
  { svg: "zap", text: "Concerts", ext: "svg" },
]

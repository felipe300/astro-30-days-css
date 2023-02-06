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

const Event = {
  "08:00 - 9:00 AM": "08:00 - 9:00 AM",
  "10:00 - 11:00 AM": "10:00 - 11:00 AM",
  "01:00 - 2:00 PM": "01:00 - 2:00 PM",
  "03:00 - 4:00 PM": "03:00 - 4:00 PM",
  "08:00 - 9:00 PM": "08:00 - 9:00 PM",
  "11:00 - 12:00 PM": "11:00 - 12:00 PM"
} as const

export type ExtensionLevel = keyof typeof Extension
export type TaskStatus = keyof typeof Status
export type EventTime = keyof typeof Event

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

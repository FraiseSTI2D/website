export type User = {
  id: number
  username: string
  email: string
  password: string
}

export type Box = {
  id: number
  createdAt: Date
  updatedAt: Date
  countFraise: number
  eclairage: boolean
  pourcentageAir: number
  user: User
  payments: Payment[]
}

export type Payment = {
  id: number
  item: string
  quantity: number
  createdAt: Date
  user: User
  box: Box
}

export type TUserModel = User & { boxs: Box[]; payments: Payment[] }

export type TStats = {
  title: string
  description: string
  count: number
}

export const boxSelect = {
  userId: false,
  id: true,
  createdAt: true,
  updatedAt: true,
  countFraise: true,
  eclairage: true,
  pourcentageAir: true,
  user: {
    select: {
      id: true,
      username: true,
      password: false,
    },
  },
}

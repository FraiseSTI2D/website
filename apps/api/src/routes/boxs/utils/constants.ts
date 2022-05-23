export const boxSelect = {
  userId: false,
  id: true,
  createdAt: true,
  updatedAt: true,
  countFraise: true,
  eclairage: true,
  pourcentageAir: true,
  location: true,
  likes: true,
  user: {
    select: {
      id: true,
      username: true,
      password: false,
    },
  },
}

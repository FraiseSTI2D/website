import { PrismaClient, Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  const userData: Prisma.UserCreateInput[] = [
    {
      email: 'vincent@fraisesti2d.com',
      username: 'Vincent',
      password: await bcrypt.hash('12345', 10),
      boxs: {
        create: [
          {
            location: '',
            countFraise: 5,
            eclairage: false,
            payments: {
              create: [],
            },
            pourcentageAir: 50,
          },
        ],
      },
    },
  ]
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

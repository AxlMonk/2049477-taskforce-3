import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.category.upsert({
    where: { categoryId: 1 },
    update: {},
    create: {
      title: 'Работа',
      tasks: {
        create: [
          {
            title: 'Работа без пота',
            userId: '13',
            content: 'Пахать в 3 пота',
            description: 'Взял, да ойда  - попер'
          },
        ]
      },
    }
  });
  await prisma.category.upsert({
    where: { categoryId: 2 },
    update: {},
    create: {
      title: 'Компьютеры',
      tasks: {
        create: [
          {
            title: 'Чини ноутбук',
            userId: '13',
            content: 'Это полный текст',
            description: 'Несколько лет назад купил себе MacBook Pro…',
            comments: {
              create: [
                {
                  message: 'Вау! Отличный ноутбук.',
                  userId: '14',
                }
              ]
            }
          },
          {
            title: 'Первый PC',
            userId: '13',
            content: 'Первый PC появился в 2000-м году…',
            description: 'Это был Pentium II, 400 Mhz, 32Mb RAM…'
          }
        ]
      }
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })

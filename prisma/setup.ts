import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(
    { log: ['query', 'info'] }
)

const users = [
    {
        full_name: 'Nicolas',
        photo: 'photo.jpg',
        email: 'nicolas@email.com'
    },
    {
        full_name: 'ed',
        photo: 'photo.jpg',
        email: 'ed@email.com'
    },
    {
        full_name: 'timi',
        photo: 'photo.jpg',
        email: 'timi@email.com'
    }
]

const hobbies = [
    {
        name: 'Coding',
        image: 'image.jpg',
        active: true
    },
    {
        name: 'Cooking',
        image: 'image.jpg',
        active: true
    },
    {
        name: 'Teaching',
        image: 'image.jpg',
        active: true
    },
    {
        name: 'Learning',
        image: 'image.jpg',
        active: true
    }
]

const userHobbys = [
    {
        userId: 1,
        hobbyId: 1
    },
    {
        userId: 2,
        hobbyId: 2
    },
    {
        userId: 3,
        hobbyId: 3
    },
    {
        userId: 1,
        hobbyId: 3
    }
]

async function createStuff() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
    for (const hobby of hobbies) {
        await prisma.hobby.create({ data: hobby })
    }
    for (const userHobby of userHobbys) {
        await prisma.userHobby.create({ data: userHobby })
    }
}

createStuff()
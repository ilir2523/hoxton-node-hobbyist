import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(
  { log: ['query', 'info'] }
)

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({ include: { hobbies: { include: { Hobby: true } } } })
  res.send(users)
})

app.get('/hobbies', async (req, res) => {
  const hobbies = await prisma.hobby.findMany({ include: { hobbies: { include: { user: true } } } })
  res.send(hobbies)
})

app.get('/hobbies/:id', async (req, res) => {
  const id = Number(req.params.id)

  const hobbies = await prisma.hobby.findFirst(
    {
      where: { id: id },
      include: { hobbies: { include: { user: true } } },
    })

  if (hobbies) {
    res.send(hobbies)
  } else {
    res.status(404).send({ error: 'Hobby not found.' })
  }
})


app.get('/users/:id', async (req, res) => {
  const id = Number(req.params.id)

  const users = await prisma.user.findFirst(
    {
      where: { id: id },
      include: { hobbies: { include: { Hobby: true } } },
    })

  if (users) {
    res.send(users)
  } else {
    res.status(404).send({ error: 'User not found.' })
  }
})

app.post('/users', async (req, res) => {
  const { full_name, photo, email } = req.body
  const errors = []

  if (typeof full_name !== "string") errors.push(`name not a string`)
  if (typeof photo !== "string") errors.push(`name not a string`)
  if (typeof email !== "string") errors.push(`email not a string`)

  const users = await prisma.user.findMany()
  for (const user of users) {
    if (user.email === email) errors.push(`This email address is already being used`)
  }

  if (errors.length === 0) {
    const newUser = await prisma.user.create({
      data: {
        full_name: full_name,
        photo: photo,
        email: email
      }
    })
    res.status(201).send(newUser)
  } else res.status(400).send({ errors: errors })

})

app.listen(PORT, () => {
  console.log(`Server runing on: http://localhost:${PORT}/`)
})
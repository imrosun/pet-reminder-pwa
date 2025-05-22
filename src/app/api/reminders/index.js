import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Get all reminders
    const reminders = await prisma.reminder.findMany({
      include: { pet: true }
    });
    return res.status(200).json(reminders);
  } 
  else if (req.method === 'POST') {
    // Create a new reminder
    const data = req.body;
    const reminder = await prisma.reminder.create({
      data: {
        title: data.title,
        notes: data.notes,
        startDate: new Date(data.startDate),
        startTime: data.startTime,
        frequency: data.frequency,
        petId: data.petId,
        category: data.category,
      }
    });
    return res.status(201).json(reminder);
  }
  
  return res.status(405).end();
}

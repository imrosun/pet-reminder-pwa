import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const reminder = await prisma.reminder.findUnique({
      where: { id: parseInt(id) },
      include: { pet: true }
    });
    return res.status(200).json(reminder);
  } 
  else if (req.method === 'PUT') {
    const data = req.body;
    const reminder = await prisma.reminder.update({
      where: { id: parseInt(id) },
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
    return res.status(200).json(reminder);
  } 
  else if (req.method === 'DELETE') {
    await prisma.reminder.delete({
      where: { id: parseInt(id) }
    });
    return res.status(204).end();
  }
  
  return res.status(405).end();
}

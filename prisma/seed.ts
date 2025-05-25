import { PrismaClient } from '@prisma/client';
import { douban_top250 } from './douban_top250';

const prisma = new PrismaClient();

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Started ...');

  await prisma.movie.deleteMany();

  await prisma.movie.createMany({
    data: douban_top250.slice(0, 10),
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();

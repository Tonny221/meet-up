import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type params = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const handle = async ({ req, res }: params) => {
  const result = await prisma.meetUp.create({
    data: {
      ...req.body,
    },
  });
};

export default handle;

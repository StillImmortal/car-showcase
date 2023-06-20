-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(50),
    "model" VARCHAR(50),
    "year" INTEGER,
    "color" VARCHAR(20),

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

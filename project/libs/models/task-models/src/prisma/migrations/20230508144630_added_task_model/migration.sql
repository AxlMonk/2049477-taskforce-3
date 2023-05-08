-- CreateTable
CREATE TABLE "posts" (
    "task_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publish_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("task_id")
);

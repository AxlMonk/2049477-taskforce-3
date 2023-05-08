import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { TaskPostEntity } from './task-post.entity';
import { Post } from '@project/shared/app-types';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class TaskPostRepository implements CRUDRepository<TaskPostEntity, number, Post> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: TaskPostEntity): Promise<Post> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        comments: {
          connect: []
        },
        // categories: {
        //   connect: entityData.categories
        //     .map(({ categoryId }) => ({ categoryId }))
        // }
      },
      include: {
        comments: true,
        categories: true,
      }
    });
  }

  public async destroy(postId: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        postId,
      }
    });
  }

  public async findById(postId: number): Promise<Post | null> {
    return this.prisma.post.findFirst({
      where: {
        postId
      },
      include: {
        comments: true,
        categories: true,
      }
    });
  }

  public find(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        comments: true,
        categories: true
      }
    });
  }

  public update(_id: number, _item: TaskPostEntity): Promise<Post> {
    return Promise.resolve(undefined);
  }
}

import { Injectable } from '@nestjs/common';
import { TaskPostRepository } from './task-post.repository';
import { TaskCategoryRepository } from '../task-category/task-category.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from '@project/shared/app-types';
import { UpdatePostDto } from './dto/update-post.dto';
import { TaskPostEntity } from './task-post.entity';

@Injectable()
export class TaskPostService {
  constructor(
    private readonly taskPostRepository: TaskPostRepository,
    private readonly taskCategoryRepository: TaskCategoryRepository
  ) {}

  async createPost(dto: CreatePostDto): Promise<Post> {
    const categories = await this.taskCategoryRepository.find(dto.categories);
    const postEntity = new TaskPostEntity({
      comment: [],
      address: "",
      city: "",
      executionPeriod: undefined,
      image: "",
      price: 0,
      tagSet: "",
      taskStatus: undefined, ...dto, categories});
    return this.taskPostRepository.create(postEntity);
  }

  async deletePost(id: number): Promise<void> {
    await this.taskPostRepository.destroy(id);
  }

  async getPost(id: number): Promise<Post> {
    return this.taskPostRepository.findById(id);
  }

  async getPosts(): Promise<Post[]> {
    return this.taskPostRepository.find();
  }

  async updatePost(_id: number, _dto: UpdatePostDto): Promise<Post> {
    throw new Error('Not implemented…');
  }
}

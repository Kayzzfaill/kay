import { Context, Hono, type TypedResponse } from "hono";
import { UsersRepository } from "./users.repository";
import type { ApplicationResult } from "../application.types";
import type {UserType} from './users.types';

export class UsersController {
  constructor(private readonly repository: UsersRepository) {}

  public routes(): Hono {
    return new Hono();
  }
  public async findAll(
    c: Context<ApplicationEnvironment>
  ): Promise<TypedResponse<ApplicationResult<UserType[]>>> {
    return c.json({
      success: true,
      data: this.repository.findAll(),
    });
  }
}

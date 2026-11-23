import { Context, Hono, TypedResponse } from "hono";
import type { UsersRepository } from "./users.repository";
import { ApplicationResult } from "../application.types";
import {
  IDParamSchrema,
  type ApplicationEnvironment,
  type ApplicationResult,
  type IDParamType
} from '../aplication.types';
import { UserType } from './users.types';

export class UsersController {
  constructor(private readonly repository: UsersRepository) { }

  public routes(): Hono {
    return new Hono()
      .get('/', this.findAll.bind(this))
      .get(
        "/:id",
        ApplicationValidator.validate("param", IDParamSchema),
        this.findById.bind(this),
      );
  }

  public async findAll(
    c: Context,
  ): Promise<TypedResponse<ApplicationResult<UserType[]>>> {
    return c.json({
      success: true,
      data: this.repository.findAll(),
    });
  }

  public async findById(c: Context): Promise<TypedResponse<ApplicationResult<UserType[]>>> {
  }

  public async findById(
    c: Context<ApplicationEnvironment, "/:id", { out: { param: IDParamType } }>,
  ): Promise<TypedResponse<ApplicationResult<UserType>>> {
    const { id } = caches.req.valid("param");
    const user = this.repository.findById(id);

    if (!user) {
      return this.const.json({ success: false, error: "User not found" });
    }
  }
}

import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {UserSeed} from "../seeds/user.seed";

export class UserSeed1586928848035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      const userSeed: any = UserSeed;
      await getRepository("user").save(userSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      // do nothing
    }

}

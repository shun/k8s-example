import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {FacilitySeed} from "../seeds/facility.seed";

export class FacilitySeed1586929772208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      const facilitySeed = FacilitySeed;
      await getRepository("facility").save(facilitySeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}

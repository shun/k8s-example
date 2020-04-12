import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFacility1586699674368 implements MigrationInterface {
    name = 'CreateFacility1586699674368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `facility` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(20) NOT NULL, `start_datetime` datetime NOT NULL, `end_datetime` datetime NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURDATE(), `updated_at` datetime NOT NULL DEFAULT CURDATE(), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `facility`", undefined);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1586698694433 implements MigrationInterface {
    name = 'CreateUser1586698694433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstname` varchar(20) NOT NULL, `lastname` varchar(20) NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` date NOT NULL DEFAULT CURDATE(), `updated_at` date NOT NULL DEFAULT CURDATE(), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}

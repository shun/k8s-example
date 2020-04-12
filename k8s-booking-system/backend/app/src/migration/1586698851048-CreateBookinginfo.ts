import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBookinginfo1586698851048 implements MigrationInterface {
    name = 'CreateBookinginfo1586698851048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `bookinginfo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(20) NOT NULL, `start_datetime` datetime NOT NULL, `end_datetime` datetime NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURDATE(), `updated_at` datetime NOT NULL DEFAULT CURDATE(), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `bookinginfo`", undefined);
    }

}

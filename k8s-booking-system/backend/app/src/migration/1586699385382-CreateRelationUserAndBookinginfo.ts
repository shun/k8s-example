import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationUserAndBookinginfo1586699385382 implements MigrationInterface {
    name = 'CreateRelationUserAndBookinginfo1586699385382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD `userId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD UNIQUE INDEX `IDX_585ecca5a669b301c29134db12` (`userId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_585ecca5a669b301c29134db12` ON `bookinginfo` (`userId`)", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD CONSTRAINT `FK_585ecca5a669b301c29134db122` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP FOREIGN KEY `FK_585ecca5a669b301c29134db122`", undefined);
        await queryRunner.query("DROP INDEX `REL_585ecca5a669b301c29134db12` ON `bookinginfo`", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP INDEX `IDX_585ecca5a669b301c29134db12`", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP COLUMN `userId`", undefined);
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1574885564887 implements MigrationInterface {
  name = 'CreateUsersTable1574885564887';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user" (
            "id" SERIAL NOT NULL, 
            "name" character varying(100) NOT NULL, 
            "login" character varying(25) NOT NULL, 
            "password" character varying(120) NOT NULL, 
            "isActive" boolean NOT NULL, 
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" 
            PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "user"`, undefined);
  }
}

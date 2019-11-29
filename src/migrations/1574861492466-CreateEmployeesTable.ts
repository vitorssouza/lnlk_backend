import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEmployeesTable1574861492466 implements MigrationInterface {
  name = 'CreateEmployeesTable1574861492466';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "employee" (
            "id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, 
            "departmentId" integer NOT NULL, 
            CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" 
            PRIMARY KEY ("id")
        )`,
    );
    await queryRunner.query(
      `ALTER TABLE "employee" ADD CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454" 
        FOREIGN KEY ("departmentId") REFERENCES "department"("id") 
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "employee" DROP CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454"`,
    );
    await queryRunner.query(`DROP TABLE "employee"`);
  }
}

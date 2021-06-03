import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('employee', (table) => {
    table.specificType('emp_id', 'CHAR(16)').primary();
    table.string('emp_name', 60).notNullable().unique();
    table.string('dep_id', 80).notNullable();
  });
}
export async function middle(knex: Knex): Promise<void> {
  await knex.schema.createTable('department', (table) => {
    table.specificType('dep_id', 'CHAR(16)').primary();
    table.string('dep_name', 60).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts');
}
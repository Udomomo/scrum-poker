import sqlite3 from 'sqlite3';
import { Player } from './player';

export class DbClient {
  private db!: sqlite3.Database;

  static initDb(): DbClient {
    const db = new sqlite3.Database(':memory:');
  
    db.exec(`
      CREATE TABLE IF NOT EXISTS scrum_poker (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        point INTEGER
      );
    `);

    const dbClient = new DbClient();
    dbClient.db = db;
    return dbClient;
  }

  insertPlayer(name: string): Promise<Player> {
    return new Promise ((resolve, reject) => {
      this.db.run(
        `INSERT INTO scrum_poker (name, point) VALUES (?, 0);`, 
        name,
        function (err: Error | null) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID, name, point: 0 });
          }
        }
      );
    });
  }

  updatePoint(id: number, point: number): Promise<void> {
    return new Promise ((resolve, reject) => {
      this.db.run(
        `UPDATE scrum_poker SET point = ? WHERE id = ?;`, 
        point,
        id,
        function (err: Error | null) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
}
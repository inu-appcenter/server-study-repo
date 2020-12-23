import db from 'mysql2/promise';
import config from '../config';

(async () => {
  const conn = await db.createConnection({ ...config.db, database: 'board' });
  //   //   await conn.execute(`
  //   //   CREATE TABLE user(
  //   //       id int(11) NOT NULL AUTO_INCREMENT,
  //   //       email varchar(100) NOT NULL,
  //   //       name varchar(100) NOT NULL,
  //   //       password varchar(100) NOT NULL,
  //   //       created_at timestamp NOT NULL DEFAULT current_timestamp(),
  //   //       updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  //   //       PRIMARY KEY (id)
  //   //   ) DEFAULT CHARSET=utf8
  //   // `);

  //   //   await conn.execute(`
  //   // CREATE TABLE post(
  //   //     id int(11) NOT NULL AUTO_INCREMENT,
  //   //     user_id int(11) NOT NULL,
  //   //     title varchar(100) NOT NULL,
  //   //     content text NOT NULL,
  //   //     created_at timestamp NOT NULL DEFAULT current_timestamp(),
  //   //     updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  //   //     PRIMARY KEY (id),
  //   //     CONSTRAINT post_user_id_fk FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
  //   // ) DEFAULT CHARSET=utf8
  //   // `);

  //   await conn.execute(`
  //   CREATE TABLE comment(
  //       id int(11) NOT NULL AUTO_INCREMENT,
  //       user_id int(11) NOT NULL,
  //       post_id int(11) NOT NULL,
  //       content text NOT NULL,
  //       created_at timestamp NOT NULL DEFAULT current_timestamp(),
  //       updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  //       PRIMARY KEY (id),
  //       CONSTRAINT comment_user_id_fk FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  //       CONSTRAINT comment_post_id_fk FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE
  //   ) DEFAULT CHARSET=utf8
  //   `);

  //   await conn.execute(`
  //   CREATE TABLE liked(
  //       id int(11) NOT NULL AUTO_INCREMENT,
  //       user_id int(11) NOT NULL,
  //       post_id int(11) NOT NULL,
  //       created_at timestamp NOT NULL DEFAULT current_timestamp(),
  //       updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  //       PRIMARY KEY (id),
  //       CONSTRAINT liked_user_id_fk FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  //       CONSTRAINT liked_post_id_fk FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE
  //   ) DEFAULT CHARSET=utf8
  //   `);
  await conn.execute(
    `INSERT INTO user (email, name, password) VALUES (?, ?, ?)`,
    ['TEST@TEST', 'TEST', 'TEST'],
  );
  conn.end();
})();

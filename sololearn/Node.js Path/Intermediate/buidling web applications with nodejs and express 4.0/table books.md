CREATE TABLE books (title varchar(255), author varchar(255));
ALTER TABLE books 
ADD id int;


INSERT INTO books (id, title, author) VALUES
(1, 'War and Peace', 'Lev Nikolayevich Tolstoy'),
(2, 'Les Miserables', 'Victor Hugo'),
(3, 'The Time Machine', 'H. G. Wells'),
(4, 'A Journey into the Center of the Earth', 'Jules Verne'),
(5, 'The Dark World', 'Henry Kuttner'),
(6, 'The Wind in the Willows', 'Kenneth Grahame'),
(7, 'Life On the Missisiippi', 'Mark Twain'),
(8, 'Childhood', 'Lev Nikolayevich Tolstoy')


CREATE TABLE `my_database`.`books` ( `id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `author` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE books ( id INT NOT NULL , title VARCHAR(255) NOT NULL , author VARCHAR(255) NOT NULL , PRIMARY KEY (id));

// const books = [
    //     {
    //         title: 'War and Peace',
    //         genre: 'Historical Fiction',
    //         author: 'Lev Nikolayevich Tolstoy',
    //         read: false
    //     },
    //     {
    //         title: 'Les Miserables',
    //         genre: 'Historical Fiction',
    //         author: 'Victor Hugo',
    //         read: false
    //     },
    //     {
    //         title: 'The Time Machine',
    //         genre: 'Science Fiction',
    //         author: 'H. G. Wells',
    //         read: false
    //     },
    //     {
    //         title: 'A jounery into the Center of the Earth',
    //         genre: 'Science Fiction',
    //         author: 'Jules Verne',
    //         read: false
    //     },
    //     {
    //         title: 'The Dark World',
    //         genre: 'Fantasy',
    //         author: 'Henry Kuttner',
    //         read: false
    //     },
    //     {
    //         title: 'The wind in the Willows',
    //         genre: 'Fantasy',
    //         author: 'Kenneth Grahame',
    //         read: false
    //     }
    // ];
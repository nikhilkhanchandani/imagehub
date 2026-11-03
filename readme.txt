Can view at my website or install manually for local, but my website is a bit slow sometimes http://nikhilkhanchandani.com:4000/


Installation:

0. Go to services/db.js and change mysql settings and add the tables below:

 host: 'localhost',
 user: 'root',
 password: '',
 database: 'project1',

1. Run following command in root folder

npm install

2. Run following command:

npm start

3. Go to following url:

http://localhost:4000/



CREATE TABLE `users` (                                  
          `id` int(11) NOT NULL AUTO_INCREMENT,                 
          `username` varchar(50) DEFAULT NULL,                  
          `email` varchar(200) DEFAULT NULL,                    
          `password` varchar(200) DEFAULT NULL,                 
          `name` varchar(50) DEFAULT NULL,                      
          `profilePic` varchar(255) DEFAULT NULL,               
          PRIMARY KEY (`id`)                                    
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8  


 CREATE TABLE `posts` (                                  
          `postId` int(11) unsigned NOT NULL AUTO_INCREMENT,    
          `userId` int(11) NOT NULL,                            
          `images` longtext,                                    
          `text` longtext,                                      
          PRIMARY KEY (`postId`)                                
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8  
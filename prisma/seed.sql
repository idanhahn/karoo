-- delete all previous records
TRUNCATE "_BookToManuscript", "User", "Manuscript", "ManuscriptAnalysis", "Book", "BookAnalysis", "BestSellerListAnalysis", "ArchTypeAnalysis" RESTART IDENTITY;

-- User Table
insert into "User" ("email") values ('idan.hahn@karoo.ai');
insert into "User" ("email") values ('jeremy.esekow@karoo.ai');
insert into "User" ("email") values ('gavin.marcus@karoo.ai');


-- Manuscript Table

-- User 1
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Deception Point by Dan Brown', 'Thriller', 'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.', '{keyword1, keyword2}', '{subject1, subject2}', false, 1, NOW(), NOW(), 1);
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Ender''s Game by Orson Scott Card', 'Sci-fi', 'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.', '{keyword1, keyword2}', '{subject1, subject2}', false, 2, NOW(), NOW(), 1);
-- User 2
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Deception Point by Dan Brown', 'Thriller', 'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.', '{keyword1, keyword2}', '{subject1, subject2}', false, 1, NOW(), NOW(), 2);
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Ender''s Game by Orson Scott Card', 'Sci-fi', 'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.', '{keyword1, keyword2}', '{subject1, subject2}', false, 2, NOW(), NOW(), 2);
-- User 3
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Deception Point by Dan Brown', 'Thriller', 'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.', '{keyword1, keyword2}', '{subject1, subject2}', false, 1, NOW(), NOW(), 3);
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Ender''s Game by Orson Scott Card', 'Sci-fi', 'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.', '{keyword1, keyword2}', '{subject1, subject2}', false, 2, NOW(), NOW(), 3);


-- Manuscript Analysis Table

-- User 1
insert into "ManuscriptAnalysis" ("plotStructure", "createdAt", "updatedAt", "manuscriptId") values ('{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}', NOW(), NOW(), 1);
insert into "ManuscriptAnalysis" ("plotStructure", "createdAt", "updatedAt", "manuscriptId") values ('{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}', NOW(), NOW(), 2);

-- User 2
insert into "ManuscriptAnalysis" ("plotStructure", "createdAt", "updatedAt", "manuscriptId") values ('{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}', NOW(), NOW(), 3);
insert into "ManuscriptAnalysis" ("plotStructure", "createdAt", "updatedAt", "manuscriptId") values ('{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}', NOW(), NOW(), 4);

-- User 3
insert into "ManuscriptAnalysis" ("plotStructure", "createdAt", "updatedAt", "manuscriptId") values ('{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}', NOW(), NOW(), 5);
insert into "ManuscriptAnalysis" ("plotStructure", "createdAt", "updatedAt", "manuscriptId") values ('{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}', NOW(), NOW(), 6);


-- Book Table
insert into "Book" ("title", "author", "genre", "publicationDate", "description", "keyWords", "subjects", "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") 
            values ('Ready Player One', 'Ernest Cline', 'Sci-fi', '2011-08-01', 'A young programmer is selected to participate in a special program to test the limits of human intelligence. He is given a mission to find the mysterious program that will destroy the world.', '{keyword1, keyword2}', '{subject1, subject2}', '978-0-553-56908-3', '307887448', 'https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/0-553-56908-3', NOW(), NOW());

insert into "Book" ("title", "author", "genre", "publicationDate", "description", "keyWords", "subjects", "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") 
            values ('The Singularity Trap', 'Dennis E. Taylor', 'Sci fi', '2018-07-01', 'Determined to give his wife and children a better life back home, Ivan Pritchard ventures to the edge of known space to join the crew of the Mad Astra as an asteroid miner. He''s prepared for hard work and loneliness—but not the unthinkable. After coming into contact with a mysterious alien substance, Pritchard finds an unwelcome entity sharing his mind, and a disturbing physical transformation taking place. With his very humanity at stake, Pritchard must save mankind from a full-scale interstellar war.','{keyword1, keyword2}', '{subject1, subject2}', '9781603934190', '', 'https://www.amazon.com/The-Singularity-Trap/dp/B07BHVR59C?tag=NYTBS-20', NOW(), NOW());

-- User 1
insert into "_BookToManuscript" values (1, 1);
insert into "_BookToManuscript" values (2, 1);

-- User 2
insert into "_BookToManuscript" values (1, 3);
insert into "_BookToManuscript" values (2, 3);

-- User 3
insert into "_BookToManuscript" values (1, 5);
insert into "_BookToManuscript" values (2, 5);




-- insert authors
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Orson Scott Card', 0,NOW(), NOW(),1);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Dan Brown', 0,NOW(), NOW(),1);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Andy Weir', 1,NOW(), NOW(),2);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('James Dashner', -1,NOW(), NOW(),1);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('S L Huang', 0,NOW(), NOW(),2);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Jessica Spencer', -1,NOW(), NOW(),3);

-- insert books
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('Ender''s Game', 'Sci-fi', '/res/Ender''s Game - Orson Scott Card.jpg', NOW(), NOW(), 1, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('Angels & Demons', 'Mystery', '/res/Angels & Demons - Dan Brown.jpg', NOW(), NOW(), 2, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('The Martian', 'Sci-fi', '/res/The Martian - Andy Weir.jpg', NOW(), NOW(), 3, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('The Last Shadow', 'Sci-fi', '/res/The Last Shadow - Orson Scott Card.jpg', NOW(), NOW(), 1, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('Digital Fortress', 'Thriller', '/res/Digital Fortress - Dan Brown.jpg', NOW(), NOW(), 2, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('Deception Point', 'Mystery', '/res/Deception Point - Dan Brown.jpg', NOW(), NOW(), 2, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('The Maze Runner', 'Young Adult', '/res/The Maze Runner - James Dashner.jpg', NOW(), NOW(), 4, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('The Fever Code', 'Young Adult', '/res/The Fever Code - James Dashner.jpg', NOW(), NOW(), 4, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('Critical Point', 'Sci-fi', '/res/Critical Point - S L Huang.jpg', NOW(), NOW(), 5, false, 1);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded", "userId") values ('Never Silly Sophie', 'Romance', '/res/Never Silly Sophie - Jessica Spencer.jpg', NOW(), NOW(), 6, false, 1);

-- insert analytics
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore","synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (90,'$55,000', 10, 'Strong Positive','Good',8,7,8,'Idea',8,6,
        'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.',
        '{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}',
        NOW(),NOW(),1);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (85,'$50,000', 9,'Positive','Very Good',9,7,9,'Three-Acts',10,8,
        'CERN director Maximilian Kohler discovers one of the facility''s top physicists murdered. The four Preferiti, the cardinals who are most likely to be elected pope, are missing. After finding the first two men dead, they confront the assassin in the act of murdering the third. Langdon and Vittoria fear that Kohler is Janus and that he has come to murder the camerlengo. Just before he dies, Kohler gives Langdon a mini video camera. The cardinals debate whether to elect Ventresca as the new Pope.',
        '{27,21,25,36,33,40,34,30,18,16,8,2,7,9,14,18,13,26,29,27,20,5,-5,-13,-4,3,7,15,20,29,29,33,47,35,28,29,37,34,29,33,25,17,18,17,12,14,13,10,6,16,14,-4,-12,-12,-18,-16,-17,-21,-15,-14,-24,-38,-39,-38,-42,-45,-47,-28,-17,-4,-9,-4,6,4,-3,-17,-19,-14,-18,-30,-45,-34,-37,-27,-23,-26,-25,-18,0,12,19,16,5,5,-1,-5,-14,-15,-4,7}',
        NOW(),NOW(),2);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (95,'$60,000', 8,'Strong Positive','Good',10,9,8,'Event',8,9,
        'With no long-range radio, he must rely on his own resourcefulness to survive. His philosophy is to "work the problem", solving each challenge in turn as it confronts him. Watney''s repeated use of the same airlock results in the decompression of the Hab and nearly kills him. NASA hastily prepares an uncrewed probe to send Watney supplies, but the rocket disintegrates after liftoff. China provides a ready-to-use booster to try again. Beck uses a Manned Maneuvering Unit, MAV, on a tether to reach Watney and bring him back to Hermes.',
        '{-47,-42,-22,-18,-30,-24,-30,-22,-12,-6,12,17,22,28,24,30,44,43,41,47,42,33,8,11,8,5,5,2,4,-8,-3,-17,-14,-14,-5,-4,-13,-19,-22,-21,-35,-34,-29,-8,-7,-24,-14,6,3,0,8,13,20,20,25,26,7,14,10,-5,-8,-5,14,26,21,27,31,28,24,25,28,33,38,43,32,18,9,11,-8,-15,-4,2,-1,-13,-7,-3,4,11,13,16,22,27,28,23,17,20,22,17,7,0}',
        NOW(),NOW(),3);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (75,'$45,000', 7,'Neutral','OK',8,5,7,'Idea',8,6,
        'Jane and Miro Ribeira instantaneously traveled to the planet Herodotus. Jane explained how Andrew Wiggin had created her body. The Hive Queen asked Jane and Sprout to carry slugs onto Thulium''s body. Once placed on her, the substance killed or removed virus worms as they went. Keas, Ravens, and Yachachi were next to be cured. Ruqyaq took them to an area with some Keas and Ravens still alive. Jane instructed the Keas to form a group who wanted to be alone and a group that wished to be with the Ravens. Sprout and Blue visited Ruqyaq to learn about their ancestors, the Huapaya people of the Andes. Sprout decided he would obey Jane and not teach Detouring to anyone, not even his own children;.',
        '{-12,-16,-19,-17,-21,-29, -31, -37,-37,-30,-29,-32,-41,-40,-44,-35,-32,-29,-18,-17,-11,0,16,28,21,27,29,34,35,43,47,44,42,39,37,34,27,20,10,14,26,17,13,5,-1,-8,-15,-12,-11,-8,-12,-5,-5,-10,-6,-18,-25,-22,-23,-19,-13,-9,-17,-26,-19,-31,-30,-32,-27,-21,-26,-29,-39,-33,-33,-40,-41,-44,-40,-35,-37,-33,-38,-44,-43,-46,-46,-39,-47,-49,-44,-33,-28,-12,-4,-7,-2,12,25,39}',        
        NOW(),NOW(),4);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (80,'$45,000', 6,'Slightly Positive','Very Good',6,8,5,'Three-Acts',9,7,
        'The story is set in the year of 1996. Ensei Tankado was a former NSA employee who became displeased with the NSA''s intrusion into people''s private lives. Tankado threatened to auction the code''s algorithm on his website if the NSA didn''t reveal his death. Strathmore kills Hale and arranges it to appear as a suicide. Becker manages to track down the ring, but ends up pursued by Hulohot in a long cat-and-mouse chase across Seville. Strathmore has been working incessantly for many months to unlock Digital Fortress. TRANSLTR is a computer worm that, once unlocked would "eat away" all the NSA databank''s security. Strathmore dies by standing next to the machine as it explodes.',
        '{40,40,32,26,22,18,12,15,23,26,18,26,37,30,34,39,36,35,40,47,47,47,40,41,34,33,27,24,24,18,18,9,9,3,4,2,8,10,19,16,15,9,12,8,5,4,4,-3,-11,-18,-20,-21,-27,-19,-12,-13,-11,-13,-20,-8,-6,-10,-14,-13,-13,-12,-20,-25,-24,-30,-25,-22,-30,-25,-21,-29,-31,-35,-40,-42,-44,-37,-39,-40,-41,-36,-32,-26,-27,-24,-23,-22,-23,-32,-27,-19,-20,-23,-25,-10}',
        NOW(),NOW(),5);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (70,'$40,000', 5,'Slightly Negative','Good',7,9,4,'Three-Acts',7,6,
        'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.',
        '{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}',
        NOW(),NOW(),6);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (75,'$45,000', 4,'Neutral','OK',5,7,7,'Milieu Story',5,6,
        'A teenage boy wakes up inside an underground elevator with no memory of his identity. He is greeted by several male youths in a large grass area called the "Glade". The next day he is attacked by Ben, who has been stung and left delirious by a Griever. Minho and Thomas discover a possible exit from the Maze. That night, the Maze entrance does not close, and others open, allowing the Grievers to enter. Several Gladers free them and enter the Maze, but Gally and a few others refuse to leave.',
        '{6,14,16,12,12,16,23,17,9,9,12,3,4,2,-7,-5,-11,-9,-10,-14,-24,-34,-29,-16,-20,-25,-36,-38,-41,-33,-44,-48,-48,-45,-44,-39,-27,-32,-39,-32,-29,-23,-16,-7,-4,11,19,25,29,38,45,39,41,40,40,39,40,39,37,32,33,25,19,4,-6,-5,-8,-5,7,15,17,21,13,14,16,5,6,13,19,27,21,26,27,19,7,5,1,-4,-12,-14,-16,-16,-22,-22,-29,-27,-27,-32,-30,-22}',
        NOW(),NOW(),7);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (40,'$25,000', 3,'Negative','Not Good',4,3,4,'Milieu Story',6,2,
        'The story follows the lives of five children raised by an organization called WICKED (World in Catastrophe Killzone Experiment Department). Killzone means the brain, the "kill zone" of the Flare. In the prologue, Stephen is introduced and has been renamed Thomas by his new-found friends. After learning that Minho is infected with the Flare, WICKED unleashes a Griever on him. Dr. Ava Paige orders Thomas, Teresa, Aris, and Rachel to kill other infected Gladers. It is revealed that Teresa was originally Deedee, who survived in the prequel The Kill Order. After the Maze Trials, Thomas hatches a thorough plan to escape WICKED. The book ends with him standing up in the Box with his memories gone, which set the events of the main series in motion.',
        '{-10,-3,4,13,13,30,42,45,48,41,47,42,37,44,45,37,24,14,12,7,1,-5,-7,-9,1,4,0,3,-1,1,4,2,6,5,4,13,19,19,22,13,12,7,5,6,-2,-5,10,22,28,29,21,15,-3,-14,-17,-14,-22,-22,-26,-24,-19,-30,-35,-36,-42,-40,-38,-35,-26,-25,-29,-43,-47,-49,-48,-40,-29,-31,-35,-25,-27,-23,-21,-23,-31,-26,-19,2,13,22,10,1,12,2,-13,-11,-13,-21,-24}',        
        NOW(),NOW(),8);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (25,'$10,000', 2,'Strong Negative','Not Good',2,5,3,'Character',3,2,
        'Cas Russell discovers her past was deliberately erased and her abilities deliberately created. When a demolitions expert targets Cas and her friends, a hidden conspiracy behind her past starts to reappear. The past, present, and future collide in a race to save one of her dearest friends.',
        '{14,0,-8,0,10,20,16,9,10,5,7,3,0,-1,24,34,29,37,31,30,30,37,48,47,46,40,39,36,28,30,26,23,29,29,14,6,-3,-2,-10,-19,-27,-24,-30,-21,-20,-18,-18,-13,-5,-7,3,14,21,19,14,20,6,3,-12,-15,-16,-11,-11,-10,-22,-38,-44,-46,-45,-45,-43,-30,-35,-32,-30,-21,-21,-25,-7,2,16,16,10,21,16,25,29,15,9,-7,-1,1,12,18,17,25,25,23,21,40}',        
        NOW(),NOW(),9);

insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "plotStructure", "createdAt", "updatedAt", "bookId") 
values (35,'$20,000', 1,'Negative','Not Good',3,1,6,'Three-Acts',3,3,
        'After a lifetime of neglect, Sophie is disowned by her mother. Where is she to go in London? She finds new friends and is reunited with her brother, the Earl of Nethercote. She also falls in love - but at heart she is still Silly Sophie.',
        '{-22,-23,-18,-23,-22,-10,-11,-11,-8,6,10,4,5,11,11,17,12,4,-2,-3,-6,-6,-5,-2,-11,-22,-16,-18,-17,-15,-17,-10,-9,-8,-8,-18,-11,-3,5,8,12,16,11,13,20,17,11,5,7,1,9,3,8,2,4,20,15,22,22,19,24,24,32,34,30,39,43,47,49,41,31,25,25,30,34,27,30,19,19,13,11,6,-9,-21,-17,-25,-25,-22,-24,-18,-19,-19,-28,-30,-40,-49,-47,-31,-23}',        
        NOW(),NOW(),10);
        
        
 
-- set uploaded
update "Book"
set "uploaded" = false

-- sanity
select * from "Agency";
select * from "Author";
select * from "Book";
select * from "Analytics"





select * from "Author" au
join "Agency" ag on "au"."agencyId" = "ag"."id" 

select * from "Book" b
join "Analytics" a on "a"."bookId" = "b"."id"

update "Book" 
set "uploaded" = false
where "id" = 3

update "Book" 
set "uploaded" = true
where "title" = 'Angels & Demons - Dan Brown'

update "Book" 
set "uploaded" = true
where "title" = 'The Martian'



select * from "Book" where "uploaded" = true

select * from "Book" where "title" = 'The Martain'

select "title" from "Book" where "id" = 1






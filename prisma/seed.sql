-- delete all previous records
TRUNCATE "Agency", "Author", "Book", "Analytics" RESTART IDENTITY;

-- insert agencies
insert into "Agency" ("name", "createdAt", "updatedAt") values ('Elite Book Shop', NOW(), NOW());
insert into "Agency" ("name", "createdAt", "updatedAt") values ('Pickwick Books', NOW(), NOW());
insert into "Agency" ("name", "createdAt", "updatedAt") values ('Wind City Books', NOW(), NOW());

-- insert authors
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Orson Scott Card', 0,NOW(), NOW(),1);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Dan Brown', 0,NOW(), NOW(),1);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Andy Weir', 1,NOW(), NOW(),2);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('James Dashner', -1,NOW(), NOW(),1);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('S L Huang', 0,NOW(), NOW(),2);
insert into "Author" ("name", "trending", "createdAt", "updatedAt", "agencyId") values ('Jessica Spencer', -1,NOW(), NOW(),3);

-- insert books
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('Ender''s Game', 'Sci-fi', '/res/Ender''s Game - Orson Scott Card.jpg', NOW(), NOW(), 1, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('Angels & Demons', 'Mystery', '/res/Angels & Demons - Dan Brown.jpg', NOW(), NOW(), 2, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('The Martian', 'Sci-fi', '/res/The Martian - Andy Weir.jpg', NOW(), NOW(), 3, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('The Last Shadow', 'Sci-fi', '/res/The Last Shadow - Orson Scott Card.jpg', NOW(), NOW(), 1, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('Digital Fortress', 'Thriller', '/res/Digital Fortress - Dan Brown.jpg', NOW(), NOW(), 2, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('Deception Point', 'Mystery', '/res/Deception Point - Dan Brown.jpg', NOW(), NOW(), 2, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('The Maze Runner', 'Young Adult', '/res/The Maze Runner - James Dashner.jpg', NOW(), NOW(), 4, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('The Fever Code', 'Young Adult', '/res/The Fever Code - James Dashner.jpg', NOW(), NOW(), 4, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('Critical Point', 'Sci-fi', '/res/Critical Point - S L Huang.jpg', NOW(), NOW(), 5, false);
insert into "Book" ("title", "genre", "cover", "createdAt", "updatedAt", "authorId", "uploaded") values ('Never Silly Sophie', 'Romance', '/res/Never Silly Sophie - Jessica Spencer.jpg', NOW(), NOW(), 6, false);

-- insert analytics
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore","synopsis", "createdAt", "updatedAt", "bookId") values (90,'$55,000', 10, 'Strong Positive','Good',8,7,8,'Idea',8,6,'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.',NOW(),NOW(),1);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (85,'$50,000', 9,'Positive','Very Good',9,7,9,'Three-Acts',10,8,'CERN director Maximilian Kohler discovers one of the facility''s top physicists murdered. The four Preferiti, the cardinals who are most likely to be elected pope, are missing. After finding the first two men dead, they confront the assassin in the act of murdering the third. Langdon and Vittoria fear that Kohler is Janus and that he has come to murder the camerlengo. Just before he dies, Kohler gives Langdon a mini video camera. The cardinals debate whether to elect Ventresca as the new Pope.',NOW(),NOW(),2);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (95,'$60,000', 8,'Strong Positive','Good',10,9,8,'Event',8,9,'With no long-range radio, he must rely on his own resourcefulness to survive. His philosophy is to "work the problem", solving each challenge in turn as it confronts him. Watney''s repeated use of the same airlock results in the decompression of the Hab and nearly kills him. NASA hastily prepares an uncrewed probe to send Watney supplies, but the rocket disintegrates after liftoff. China provides a ready-to-use booster to try again. Beck uses a Manned Maneuvering Unit, MAV, on a tether to reach Watney and bring him back to Hermes.',NOW(),NOW(),3);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (75,'$45,000', 7,'Neutral','OK',8,5,7,'Idea',8,6,'Jane and Miro Ribeira instantaneously traveled to the planet Herodotus. Jane explained how Andrew Wiggin had created her body. The Hive Queen asked Jane and Sprout to carry slugs onto Thulium''s body. Once placed on her, the substance killed or removed virus worms as they went. Keas, Ravens, and Yachachi were next to be cured. Ruqyaq took them to an area with some Keas and Ravens still alive. Jane instructed the Keas to form a group who wanted to be alone and a group that wished to be with the Ravens. Sprout and Blue visited Ruqyaq to learn about their ancestors, the Huapaya people of the Andes. Sprout decided he would obey Jane and not teach Detouring to anyone, not even his own children;.',NOW(),NOW(),4);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (80,'$45,000', 6,'Slightly Positive','Very Good',6,8,5,'Three-Acts',9,7,'The story is set in the year of 1996. Ensei Tankado was a former NSA employee who became displeased with the NSA''s intrusion into people''s private lives. Tankado threatened to auction the code''s algorithm on his website if the NSA didn''t reveal his death. Strathmore kills Hale and arranges it to appear as a suicide. Becker manages to track down the ring, but ends up pursued by Hulohot in a long cat-and-mouse chase across Seville. Strathmore has been working incessantly for many months to unlock Digital Fortress. TRANSLTR is a computer worm that, once unlocked would "eat away" all the NSA databank''s security. Strathmore dies by standing next to the machine as it explodes.',NOW(),NOW(),5);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (70,'$40,000', 5,'Slightly Negative','Good',7,9,4,'Three-Acts',7,6,'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.',NOW(),NOW(),6);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (75,'$45,000', 4,'Neutral','OK',5,7,7,'Milieu Story',5,6,'A teenage boy wakes up inside an underground elevator with no memory of his identity. He is greeted by several male youths in a large grass area called the "Glade". The next day he is attacked by Ben, who has been stung and left delirious by a Griever. Minho and Thomas discover a possible exit from the Maze. That night, the Maze entrance does not close, and others open, allowing the Grievers to enter. Several Gladers free them and enter the Maze, but Gally and a few others refuse to leave.',NOW(),NOW(),7);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (40,'$25,000', 3,'Negative','Not Good',4,3,4,'Milieu Story',6,2,'The story follows the lives of five children raised by an organization called WICKED (World in Catastrophe Killzone Experiment Department). Killzone means the brain, the "kill zone" of the Flare. In the prologue, Stephen is introduced and has been renamed Thomas by his new-found friends. After learning that Minho is infected with the Flare, WICKED unleashes a Griever on him. Dr. Ava Paige orders Thomas, Teresa, Aris, and Rachel to kill other infected Gladers. It is revealed that Teresa was originally Deedee, who survived in the prequel The Kill Order. After the Maze Trials, Thomas hatches a thorough plan to escape WICKED. The book ends with him standing up in the Box with his memories gone, which set the events of the main series in motion.',NOW(),NOW(),8);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (25,'$10,000', 2,'Strong Negative','Not Good',2,5,3,'Character',3,2,'Cas Russell discovers her past was deliberately erased and her abilities deliberately created. When a demolitions expert targets Cas and her friends, a hidden conspiracy behind her past starts to reappear. The past, present, and future collide in a race to save one of her dearest friends.',NOW(),NOW(),9);
insert into "Analytics" ("totalScore", "valuation", "valuationScore", "recommendation", "readability", "readabilityScore", "paceScore", "complexityScore", "structure", "structureScore", "trendingScore", "synopsis", "createdAt", "updatedAt", "bookId") values (35,'$20,000', 1,'Negative','Not Good',3,1,6,'Three-Acts',3,3,'After a lifetime of neglect, Sophie is disowned by her mother. Where is she to go in London? She finds new friends and is reunited with her brother, the Earl of Nethercote. She also falls in love - but at heart she is still Silly Sophie.',NOW(),NOW(),10);


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

update "Book"
set "uploaded" = false

select * from "Book" where "uploaded" = true

select * from "Book" where "title" = 'The Martain'

select "title" from "Book" where "id" = 1






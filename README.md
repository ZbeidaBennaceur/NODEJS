# NODEJS
-Dans ce dossier, il y a le package json, package-lock.json, plusieurs fichiers java script dont un serveur, ainsi qu'un fichier txt. Je vais expliquer chaque élément de ce dossier.
-Dans un premier temps j'ai créé le package json avec la commande npm init.
-J'ai ensuite créer un fichier JS nommé serveur. C'est sur ce fichier que j'ai exécuté mes commandes.
-J'ai créé un fichier javascript "hello-word" avec la commande fs.writeFile, comportant le texte hello world avec la commande fs.readFile.
-Pour la création du serveur, j'ai utilisé la commande http.createServer. Le serveur est sur le port 3000.
-Avec la commande fs.writeFile, j'ai crée un fichier txt. J'ai ajouté le paramétre UTF-8 afin que celui-ci soit bien encodé en UTF-8. Le fichier comporte le texte Hello node, que j'ai ajouté avec la fonction fs.readFile.
-j'ai créé un fichier JS du nom de password-generator, j'ai utilisé le third module generate-password. J'ai ajouté les conditions pour la création du mot de passe.

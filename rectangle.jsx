﻿var docRef = app.activeDocument;var docWidth = docRef.widthvar docHeight = docRef.heightvar artLayer = docRef.layers.add()var rect = artLayer.pathItems.rectangle( 2.83465, -2.83465, docWidth + 5.66929, docHeight + 5.66929 );var artLayer = docRef.layers.add()var rect = artLayer.pathItems.rectangle( 0, 0, docWidth, docHeight );// nommer le calque// nommer la découpe// définir le contour// définir la surimpression// enregistrer le fichier en pdf// ajouter un masque (doc + 2 mm) OK// définir la couleur
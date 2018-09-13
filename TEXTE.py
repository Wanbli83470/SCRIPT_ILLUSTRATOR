lettre = input("Indiquer la lettre en majuscule : ")
nb_page = input("indiquer nombre de page : ")

nb_page = int(nb_page)
numerotation = 1

while numerotation <= nb_page :
	texte = "493165 "+ lettre + str(numerotation)+" AROMA ZONE"
	numerotation += 1
	print(texte)

print(texte)
"""import pyperclip
pyperclip.copy('The text to be copied to the clipboard.')
pyperclip.paste()
'The text to be copied to the clipboard."""

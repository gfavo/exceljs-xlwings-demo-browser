import xlwings as xw

with xw.App(visible=False) as app:
    wb = app.books.open("newFile.xlsx")
    wb.to_pdf("newFile.pdf")
    wb.close()
async function manipulateXlsx() {
    const workbook = new ExcelJS.Workbook();

    const input = document.querySelector('input[type=file]');
    const file = input.files[0];

    const blob = new Blob([file],  {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
    const buffer = await blob.arrayBuffer();

    await workbook.xlsx.load(buffer);

    const worksheet = workbook.getWorksheet('Worksheet1');

    worksheet.getCell('B1').value = 'John Doe';
}
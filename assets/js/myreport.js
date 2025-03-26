let myReportConfig = {
    pdfPath: '../download/pdf/',
    reportName: 'JAHEZ_MyReport'
}

async function getBlob(fileURL) {

    let response = await fetch(fileURL);
    let file = await response.blob();
    
    return file;
}

async function readFileAsync(file) {

    let blob = await getBlob(file)

    return new Promise((resolve, reject) => {
       let reader = new FileReader(); 
       reader.onload = () => {
          resolve(reader.result);
       }; 
       reader.onerror = reject; 
       reader.readAsArrayBuffer(blob);
    })
}

function download(file, filename, type) {

    const link = document.getElementById('dwnid');
    link.download = filename;
    let binaryData = [];
    binaryData.push(file);

    link.href = URL.createObjectURL(new Blob(binaryData, {type: type}))
}

async function merge(urls) {
    let PDFDocument = PDFLib.PDFDocument;
    const mergedPdf = await PDFDocument.create();
    
    for(let url of urls){
        let bytes = await readFileAsync(myReportConfig.pdfPath + url.Name);
        const pdf = await PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page)); 
    }

    const mergedPdfFile = await mergedPdf.save();

    download(mergedPdfFile, myReportConfig.reportName + '.pdf', 'application/pdf')
}

function generateDownloadLink(){
    let files = JSON.parse(localStorage.getItem("cart"))
    let sorted = files.sort((a, b) => a.Rid - b.Rid);
    
    merge(sorted);
}

generateDownloadLink()
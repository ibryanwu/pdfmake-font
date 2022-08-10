import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  msyh: {
    normal: "msyh.ttf",
    bold: "msyh.ttf",
    italics: "msyh.ttf",
    bolditalics: "msyh.ttf",
  },
};
const styles = {
  invoiceRight: { alignment: "right" },
  invoiceNo: { alignment: "right", fontSize: 22, bold: true },
  header: {
    fontSize: 18,
    bold: true,
  },
};

const companyInfo = () => {
  let info = { companyName: "" };
  return info;
};

const header = () => {
  let headerInfo = {
    Tax: "",
    Amount: "",
    invoiceNo: "SA-CS1956",
    invoiceCode: "SA-20220803-010",
    invoiceDate: "2022-08-03",
    companyName: "昌盛行贸易批发有限公司",
    companyNameAid: "SHENG CHANG TRADING",
    companyAddress:
      "Tel: (416)-678-6699/647-523-1118; Fax: (416)640-8335; E_mail:" +
      "shengchangtradinginc@gmail.com; ADD: 5310 FINCH AVENUE" +
      "EAST, UNIT 21, SCARBOROUGH, ONTARIOM1S 5E8",
    clientName: "KAI-WING RESTAURANT",
    clientAddress:
      "HWY #1, Coldbrook Village Park Drive, Coldbrook Village Park Drive,NS B4R 1B9,TEL:1902-670-9081C /1902-679-6599",
    remark: "",
    headerRemark: "",
    footerRemark: "",
  };
  //
  let content = [
    {
      columns: [
        {
          width: "60%",
          text: { text: `${headerInfo.companyName}\n`, style: "header" },
        },
        {
          width: "40%",
          text: [
            { text: `InvoiceNo:\n`, style: "invoiceRight" },
            { text: `${headerInfo.invoiceNo}\n`, style: "invoiceNo" },
            {
              text: `invoiceDate:${headerInfo.invoiceDate}`,
              style: "invoiceRight",
            },
          ],
        },
      ],
    },

    "Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.",
    {
      text: "A simple table (no headers, no width specified, no spans, no styling)",
      style: "subheader",
    },
    "The following table has nothing more than a body array",
    {
      style: "tableExample",
      table: {
        body: [
          ["Column 1", "Column 2", "Column 3"],
          ["One value goes here", "Another one here", "OK?"],
        ],
      },
    },
    { text: "A simple table with nested elements", style: "subheader" },
    "It is of course possible to nest any other type of nodes available in pdfmake inside table cells",
    {
      style: "tableExample",
      table: {
        body: [
          ["Column 1", "Column 2", "Column 3"],
          [
            {
              stack: [
                "Let's try an unordered list",
                {
                  ul: ["item 1", "item 2"],
                },
              ],
            },
            [
              "or a nested table",
              {
                table: {
                  body: [
                    ["Col1", "Col2", "Col3"],
                    ["1", "2", "3"],
                    ["1", "2", "3"],
                  ],
                },
              },
            ],
            {
              text: [
                "Inlines can be ",
                { text: "styled\n", italics: true },
                { text: "easily as everywhere else", fontSize: 10 },
              ],
            },
          ],
        ],
      },
    },
  ];

  return content;
};

const detail = () => {
  let content = [];
  content.push("1");
  return content;
};
const footer = () => {
  let content = [];
  content.push("1");
  return content;
};
export const myPdf = () => {
  let docDefinition = {
    content: header(),
    styles: styles,
    defaultStyle: {
      fontSize: 10,
      bold: false,
      font: "msyh",
    },
  };

  console.log("===1===");
  pdfMake.createPdf(docDefinition).open();
  console.log("===2===");
};

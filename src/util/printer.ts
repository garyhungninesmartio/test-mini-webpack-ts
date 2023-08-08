type PrinterParam = {
  payload: String;
};

export default function (param: PrinterParam) {
  console.log(param.payload);
}

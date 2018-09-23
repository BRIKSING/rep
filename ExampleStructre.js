//Объект в js - это набор определенных свойств, объединенных в одном месте.
var obj = {
  width: "300px",
  height: "400px"
}
//Твоя структура должна отвечать твоим требованиям, которые ты задашь сам
var yourStructure = {
  columns: [
    {
      width: 50
    },
    {
      width: 50
    },
  ],
  rows: [
    {
      width: 25
    },
    {
      width: 25
    },
    {
      width: 25
    },
    {
      width: 25
    },
  ]
};

//Чтобы создать css свойство, нужно правильно взять значения из данной структуры.
//работа с колонками.
var columns = yourStructure.columns;
var gridColumnsTemplateProperty = '';
columns.forEach(function (item, i, arr) {
  gridColumnsTemplateProperty += item.width +'% ';
})

console.log(gridColumnsTemplateProperty);

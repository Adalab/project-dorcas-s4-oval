import React from 'react';
import Chart, {
    CommonSeriesSettings,
    Series
  } from "devextreme-react/ui/chart";

  const dataLaberList = [
    {
      list: "Backlog",
      nourgente: 5,
      fueradesprint: 4,
      feature: 5,
      incidenciadeseguridadolegal:5,
      incidenciaobug:8,
      soporte:2,
      mantenimiento:0,
      epic:5,
      l:8,
      m:2,
      s:0,
      xl:8,
      xs:2,
      xxl:0,
      xxs:0,
      back:8,
      calculo:2,
      front:0
    },
    {
      list: "Next sprint",
      nourgente: 2,
      fueradesprint: 8,
      feature: 6,
      incidenciadeseguridadolegal:1,
      incidenciaobug:4,
      soporte:5,
      mantenimiento:0,
      epic:9,
      l:2,
      m:3,
      s:1,
      xl:4,
      xs:2,
      xxl:1,
      xxs:5,
      back:7,
      calculo:0,
      front:0
    },
    {
      list: "Sprint",
      nourgente: 5,
      fueradesprint: 4,
      feature: 5,
      incidenciadeseguridadolegal:1,
      incidenciaobug:6,
      soporte:5,
      mantenimiento:0,
      epic:6,
      l:3,
      m:1,
      s:4,
      xl:7,
      xs:5,
      xxl:0,
      xxs:1,
      back:2,
      calculo:2,
      front:0
    },
    {
      list: "To Do",
      nourgente: 4,
      fueradesprint: 3,
      feature: 5,
      incidenciadeseguridadolegal:1,
      incidenciaobug:5,
      soporte:4,
      mantenimiento:0,
      epic:3,
      l:5,
      m:1,
      s:0,
      xl:8,
      xs:2,
      xxl:0,
      xxs:0,
      back:4,
      calculo:4,
      front:0
    },
    {
      list: "Doint",
      nourgente: 5,
      fueradesprint: 4,
      feature: 4,
      incidenciadeseguridadolegal:3,
      incidenciaobug:5,
      soporte:1,
      mantenimiento:0,
      epic:7,
      l:5,
      m:2,
      s:0,
      xl:4,
      xs:2,
      xxl:0,
      xxs:0,
      back:4,
      calculo:2,
      front:0
    },
    {
      list: "Block or Testing",
      nourgente: 5,
      fueradesprint: 5,
      feature: 5,
      incidenciadeseguridadolegal:3,
      incidenciaobug:4,
      soporte:2,
      mantenimiento:0,
      epic:5,
      l:4,
      m:2,
      s:0,
      xl:2,
      xs:2,
      xxl:1,
      xxs:0,
      back:1,
      calculo:2,
      front:0
    },
    {
        list: "Done",
        nourgente: 5,
        fueradesprint: 4,
        feature: 3,
        incidenciadeseguridadolegal:8,
        incidenciaobug:6,
        soporte:2,
        mantenimiento:0,
        epic:3,
        l:4,
        m:2,
        s:0,
        xl:8,
        xs:2,
        xxl:1,
        xxs:0,
        back:8,
        calculo:2,
        front:0
      },
      {
        list: "Dismiss",
        nourgente: 5,
        fueradesprint: 4,
        feature: 2,
        incidenciadeseguridadolegal:6,
        incidenciaobug:4,
        soporte:2,
        mantenimiento:0,
        epic:1,
        l:4,
        m:2,
        s:0,
        xl:6,
        xs:2,
        xxl:0,
        xxs:0,
        back:8,
        calculo:2,
        front:0
      }
  ];

class BarChart extends React.Component {
render(){
return (
    <Chart
    dataSource={dataLaberList}
    title="List Cards"
  >
    <CommonSeriesSettings
      argumentField={"list"}
      type={"bar"}
      hoverMode={"allArgumentPoints"}
    />

    <Series valueField={"nourgente"} name={"No Urgente"} />
    <Series valueField={"fueradesprint"} name={"Fuera de Sprint"} />
    <Series valueField={"feature"} name={"Feature"} />
    <Series valueField={"incidenciadeseguridadolegal"} name={"Incidencia de Seguridad o Legal"} />
    <Series valueField={"incidenciaobug"} name={"Incidencia o bug"} />
    <Series valueField={"soporte"} name={"Soporte"} />
    <Series valueField={"mantenimiento"} name={"Mantenimiento"} />
    <Series valueField={"epic"} name={"Epic"} />
    <Series valueField={"l"} name={"L"} />
    <Series valueField={"m"} name={"M"} />
    <Series valueField={"s"} name={"S"} />
    <Series valueField={"xl"} name={"XL"} />
    <Series valueField={"xs"} name={"XS"} />
    <Series valueField={"xxl"} name={"XXL"} />
    <Series valueField={"xxs"} name={"XXS"} />
    <Series valueField={"back"} name={"Back"} />
    <Series valueField={"calculo"} name={"Calculo"} />
    <Series valueField={"front"} name={"Front"} />

  </Chart>
 );
 }
}

export default BarChart;

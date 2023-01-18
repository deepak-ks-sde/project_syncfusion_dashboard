import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip, getThemeColor, MinorTickLines, NiceInterval } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
// import { getTBarItemsIndex } from '@syncfusion/ej2-react-richtexteditor';
// import { BsCloudRainHeavy, BsFillLaptopFill, BsGenderTrans, BsJournalArrowUp, BsJustifyRight, BsThermometer, BsTypeUnderline } from 'react-icons/bs';
// import { ByteArray } from '@syncfusion/ej2/pdf-export';
// import { GiBadGnome, GiH2O, GiHoneyJar, GiJackPlug, GiNailedHead, GiNeedleJaws, GiNightSky, GiTribunalJury, GiYunluo } from 'react-icons/gi';
// import { HiCurrencyYen } from 'react-icons/hi';
// import { NotifyPropertyChanges } from '@syncfusion/ej2/base';
// import { IoMdJet } from 'react-icons/io';
// import { deserialize } from '@syncfusion/ej2/diagrams';
// import { getNumberDependable, HijriParser } from '@syncfusion/ej2-base';
// import { getTargetElement } from '@syncfusion/ej2/maps';
// import { TiSortNumerically } from 'react-icons/ti';
// import { rtlUpdated } from '@syncfusion/ej2-react-grids';
// import { RiTyphoonFill, RiVipFill, RiYoutubeFill } from 'react-icons/ri';
// import { BiGame, BiGhost, BiGitBranch } from 'react-icons/bi';
// import { normalizeHash } from '@remix-run/router/dist/utils';
// import { getBaseShapeAttributes } from '@syncfusion/ej2/pdfviewer';
// import { multiLevelLabelClick } from '@syncfusion/ej2/pivotview';
// import { hydrate } from 'react-dom';
// import { uiUpdate, ValueFormatter } from '@syncfusion/ej2-react-grids/src';
// import { AiFillYuque } from 'react-icons/ai';
// import { getValueFromAngle } from '@syncfusion/ej2/circulargauge';
// import { hideLayout } from '@syncfusion/ej2/filemanager';
// import { degreeToLocation } from '@syncfusion/ej2/progressbar';
// import { localPagedExpandCollapse } from '@syncfusion/ej2/treegrid';
// import { useInRouterContext, useNavigationType } from 'react-router-dom';
// import { rtlMode } from '@syncfusion/ej2-react-richtexteditor/src';
// import { MdNoPhotography } from 'react-icons/md';
// import { yToCoordinate } from '@syncfusion/ej2-maps';
// import { FreeTextSettings } from '@syncfusion/ej2-pdfviewer';
// import { defaultToString } from '@syncfusion/ej2-pdf-export';
// import { gridChkBox } from '@syncfusion/ej2/grids';
// import { multiplyMatrix } from '@syncfusion/ej2/drawings';

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
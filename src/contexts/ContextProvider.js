import { createHashHistory } from '@remix-run/router';
import { drag, NiceInterval, Thickness } from '@syncfusion/ej2-react-charts';
import { rtlUpdated, uiUpdate } from '@syncfusion/ej2-react-grids';
import { BaseQuickToolbar, count, getTBarItemsIndex, htmlKeyConfig, rtlMode } from '@syncfusion/ej2-react-richtexteditor';
import { toPixel } from '@syncfusion/ej2/circulargauge';
import { middleElement } from '@syncfusion/ej2/diagrams';
import { RgbColor } from '@syncfusion/ej2/heatmap';
import { BTN_CANCEL } from '@syncfusion/ej2/inplace-editor';
import { bubbleClick } from '@syncfusion/ej2/maps';
import { FreeTextAnnotation } from '@syncfusion/ej2/pdfviewer';
import { numberFormattingMenu } from '@syncfusion/ej2/pivotview';
import { freeze } from '@syncfusion/ej2/spreadsheet';
import { virtualActionArgs } from '@syncfusion/ej2/treegrid';
import React, { createContext, useContext, useState } from 'react';
import { hydrate } from 'react-dom';
import { BiOutline } from 'react-icons/bi';
import { BsJustifyLeft, BsType, BsTypeH1, BsTypeUnderline } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { GiBabyBottle, GiBuyCard, GiTank, GiTec9, GiVulture } from 'react-icons/gi';
import { HiUpload } from 'react-icons/hi';
import { RiYoutubeFill } from 'react-icons/ri';
import { SiNuxtdotjs, SiTypo3 } from 'react-icons/si';
import { TiEject, TiHeadphones } from 'react-icons/ti';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);





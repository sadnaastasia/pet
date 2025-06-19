import { GiPowerLightning } from 'react-icons/gi';
import { FaStopwatch } from 'react-icons/fa6';
import { MdOutlineDifference } from 'react-icons/md';
import { PiBrain } from 'react-icons/pi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { MdChildCare } from 'react-icons/md';
import { BsSpeedometer } from 'react-icons/bs';
import type { ReactNode } from 'react';

interface Item {
  id: number;
  title?: string;
  icon?: ReactNode;
  style?: string;
  class?: string;
}

export const runningLineArray: Array<Item> = [
  { id: 1, title: "It's effective", icon: <GiPowerLightning /> },
  { id: 2, title: 'Short-term', icon: <FaStopwatch /> },
  {
    id: 3,
    title: 'It can be provided in different formats',
    icon: <MdOutlineDifference />,
  },
  { id: 4, title: 'Suitable for sceptics', icon: <PiBrain /> },
  { id: 5, title: 'Evidence-based', icon: <RiSecurePaymentLine /> },
  { id: 6, title: 'Covered by insurance in many countries', icon: <GrMoney /> },
  {
    id: 7,
    title: 'It changes life for the better',
    icon: <MdOutlineSelfImprovement />,
  },
  { id: 8, title: 'Adapted for children', icon: <MdChildCare /> },
  { id: 9, title: 'Quick results', icon: <BsSpeedometer /> },
];

export const impactScroll: Array<Item> = [
  { id: 1, title: 'Emotional well-being', style: 'rgb(176, 171, 218)' },
  {
    id: 2,
    title: 'Improved relationships',
    style: 'rgb(242, 142, 124)',
  },
  {
    id: 3,
    title: 'Enhanced coping skills',
    style: 'rgb(239, 232, 92)',
  },
  { id: 4, title: 'Personal growth', style: 'rgb(191, 207, 166)' },
  { id: 5, title: 'Decreased anxiety', style: 'rgb(145, 201, 211)' },
];

export const beckoningInfo_button: Array<Item> = [
  {
    id: 1,
    title: 'What is cognitive behavioral therapy?',
    class: 'articles_button articles_button_red',
  },
  {
    id: 2,
    title: 'Cognitive model',
    class: 'articles_button articles_button_green',
  },
  {
    id: 3,
    title: 'Clinical Significance',
    class: 'articles_button articles_button_blue',
  },
  {
    id: 4,
    title: 'How does CBT works?',
    class: 'articles_button articles_button_yellow',
  },
  {
    id: 5,
    title: 'What techniques are used in CBT?',
    class: 'articles_button articles_button_violet',
  },
  {
    id: 6,
    title: 'Who suits CBT?',
    class: 'articles_button articles_button_pink',
  },
];

export const sideMenu_button: Array<Item> = [
  {
    id: 1,
    title: 'Our school',
  },
  {
    id: 2,
    title: 'Our teachers',
  },
  {
    id: 3,
    title: 'Our services',
  },
];

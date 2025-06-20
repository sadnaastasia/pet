import { GiPowerLightning } from 'react-icons/gi';
import { FaStopwatch } from 'react-icons/fa6';
import { MdOutlineDifference } from 'react-icons/md';
import { PiBrain } from 'react-icons/pi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';
status;
import { MdOutlineSelfImprovement } from 'react-icons/md';
import { MdChildCare } from 'react-icons/md';
import { BsSpeedometer } from 'react-icons/bs';
import type { ReactNode } from 'react';

interface LineItem {
  id: number;
  title: string;
  icon: ReactNode;
}
interface ScrollItem {
  id: number;
  title: string;
  style: string;
}
interface InfoItem {
  id: number;
  title: string;
  class: string;
}
interface MenuItem {
  id: number;
  title: string;
}
interface ProductItem {
  id: number;
  image: string;
  title: string;
  info: string;
  price: string;
}

export const runningLineArray: Array<LineItem> = [
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

export const impactScroll: Array<ScrollItem> = [
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

export const beckoningInfo_button: Array<InfoItem> = [
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

export const sideMenu_button: Array<MenuItem> = [
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

export const productArray: Array<ProductItem> = [
  {
    id: 1,
    image: '../public/product1.jpg',
    title:
      'Theory and Practice of Cognitive-Behavioral Therapy: a clinical course with pre-accreditation status ',
    info: 'Learn how Cognitive Behavioral Therapy (CBT) equips people to improve their emotional intelligence + mental well-being.',
    price: '1000$',
  },
  {
    id: 2,
    image: '../public/product2.jpg',
    title: 'Person-Centred Counselling Course (Certification Program)',
    info: 'Learn the essentials of person-centred psychology, counselling skills, communication + active listening to help others.',
    price: '200$',
  },
  {
    id: 3,
    image: '../public/product3.jpg',
    title: 'PSYCHOLOGY: Stress & Anxiety Management (FULLY ACCREDITED)',
    info: 'CERTIFIED Course on Psychology of Anxiety-related Disorders: Generalised & Social',
    price: '250$',
  },
  {
    id: 4,
    image: '../public/product4.jpeg',
    title: 'Learn Social Psychology',
    info: 'Understand How People Think, Feel, and Behave in this Complete Introduction to Social Psychology',
    price: '100$',
  },
  {
    id: 5,
    image: '../public/product5.jpeg',
    title: 'CRIMINAL PSYCHOLOGY: Crime & Personality Disorders',
    info: 'FULLY ACCREDITED & CERTIFIED Course on Delinquent Behaviour & Crime Psychology',
    price: '450$',
  },
  {
    id: 6,
    image: '../public/product6.jpeg',
    title: 'Schema Therapy Practitioner Course',
    info: 'Schema Therapy Essentials: Rewire Childhood Patterns & Build Unshakable Emotional Freedom',
    price: '170$',
  },
  {
    id: 7,
    image: '../public/product7.jpeg',
    title: 'Organizational Psychology and Human Resource Management',
    info: 'Certification in Organizational and Industrial Psychology From an HRM Professional. A Perfect Human Resource MGT Course',
    price: '70$',
  },
  {
    id: 8,
    image: '../public/product8.jpeg',
    title: 'Personality Disorders: Master the Psychology of All 10 Types',
    info: 'A comprehensive review of everything in the DSM on personality disorders. Narcissistic, Borderline, Schizoid, and more!',
    price: '300$',
  },
  {
    id: 9,
    image: '../public/product9.jpeg',
    title: 'Child Psychology: Advanced Level - (FULLY ACCREDITED)',
    info: "CERTIFIED Course on Developmental Milestones & Child's Emotional Behaviour",
    price: '550$',
  },
  {
    id: 10,
    image: '../public/product10.jpeg',
    title: 'Cognitive Behavioural Therapy (CBT) for Eating Disorders',
    info: 'FULLY ACCREDITED & CERTIFIED Course on Diagnose & CBT Treatment of Anorexia, Bulimia, Binge Eating',
    price: '700$',
  },
];

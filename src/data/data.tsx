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
import product1 from '../../public/product1.webp';
import product2 from '../../public/product2.webp';
import product3 from '../../public/product3.webp';
import product4 from '../../public/product4.webp';
import product5 from '../../public/product5.webp';
import product6 from '../../public/product6.webp';
import product7 from '../../public/product7.webp';
import product8 from '../../public/product8.webp';
import product9 from '../../public/product9.webp';
import product10 from '../../public/product10.webp';

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
  program: Array<string>;
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

export const courseCBT: Array<string> = [
  'Gain Insights: Master essential CBT concepts like cognitive restructuring and behavioral activation.',
  'Skill Development: Apply theoretical models such as Beck’s Cognitive Therapy and REBT in practice.',
  'Self-Discipline: How to discipline your mindset, thinking, emotions and develop healthy lifestyle habits.',
  'Self-Awareness: Learn how to challenge unhelpful worldviews that are not based on facts or truth.',
  'Practical Insights: Understand the psychology behind your beliefs, attitude, behaviours and worldviews.',
  'Social-Efficiency: Master your communications by learning effective people skills & language patterns.',
  'Social-Influence: How to help people make decisions that align with their values, beliefs & priorities.',
  'Social-Influence: Learn how to help people make peace with their past and create positive future plans.',
  'Self-Awareness: Gain a deep understanding of yourself & become more attuned in the present moment.',
  'Self-Knowledge: Understand the connection between your thoughts, mindset, behaviour & outcomes.',
];

export const coursePersonCentred: Array<string> = [
  'Practical Insights: Learn to build empowering personal relationships with empathy, acceptance and trust.',
  "Self-Awareness: Know the psychology behind people's beliefs, perspectives, behaviour and worldviews.",
  'Social-Influence: Master your communication skills, learn effective people skills and language patterns.',
  'Self-Knowledge: Understand how to apply a range of applied psychology-based theories & principles.',
  "Self-Discipline: Identify how to challenge unhelpful belief systems that aren't based on facts or truth.",
  'Social-Efficiency: Explore how to help people make peace with the past & create compelling future plans.',
  'Practical Insights: Gain the insights needed to identify & correct limiting beliefs, behaviours or attitudes.',
  'Social-Influence: Learn how to influence people who are stuck in a negative attitude or victim outlook.',
  'Listening Skills: Master the skill of deep listening. Learn how to ask open and thoughtful questions.',
];

export const courseStressManagement: Array<string> = [
  'You will gain knowledge related to stress- and anxiety disorders.',
  'You will have an understanding of stress management.',
  "You will be able to explain 'the nature' of stress- and anxiety related disorders.",
  'You will know how to de-stress yourself and others around you!',
];

export const courseSocial: Array<string> = [
  'Understand research in psychology.',
  'See social influences on everyday behaviors.',
  'Develop greater understanding of other people.',
  "Implement psychological research to meet one's own goals.",
  'Perform better in a social psychology class',
];

export const courseCriminal: Array<string> = [
  'The reasons for criminal behaviour.',
  'Types of crime: burglary, murder, serial killing, etc.',
  'Personality disorders & crime.',
  'Common characteristics of criminals.',
  'Personality Theory of Criminal Behaviour.',
  'Sex offending behaviour.',
  'Other important aspects of criminology & criminal psychology',
];

export const courseSchema: Array<string> = [
  'What coping mechanisms, how those influence our life and how to replace them with healthier behavioral alternatives.',
  'Schema domains-How unmet needs shape our behavior, relationships and overall interaction with the external world.',
  'Lifetraps-What lifetraps are, how to detect origins, how lifetraps correlate with certain modes and how to change them.',
  'Types of interventions and techniques in Schema therapy.',
  'Modes of dysfunctional child and parent modes and how to treat it.',
  'Learn how to practice self-improvement and how to use Schema therapy for your self-growth in most effective way.',
  'Break Toxic Coping Cycles: Rewire avoidance/overcompensation into boundary-setting & emotional agility (with scripts).',
  '14 Clinical Techniques Adapted for Solo Use: Chair work, schema diaries, limited reparenting (demo videos included).',
  "Mode Switch Protocol: Exit 'Vulnerable Child' & 'Punitive Parent' modes in <10 mins using somatic cues.",
  'Rewrite Relationship Patterns: Stop attracting unavailable partners/bullies (attachment schema repair toolkit).',
  "Career-Altering Confidence: Silence 'Fraud Syndrome' & own your worth (healthy adult mode activation).",
  'Crisis Navigation Blueprint: Schema hacks for anxiety spirals, conflict avoidance, and emotional flashbacks',
];

export const courseHumanManagement: Array<string> = [
  'Understand the impact of globalization on industry, exploring both challenges and opportunities it presents in organizational dynamics.',
  'Gain insights into various motivation theories, including ERG theory, and learn how to apply them to enhance employee motivation and satisfaction.',
  'Develop an understanding of emotional intelligence and its importance in the workplace for managing stress, fostering teamwork, and leadership.',
  'Explore the concepts of power and politics within organizations, and understand effective job design and Organizational Behavior Modification (OBMOD).',
  'Learn about the nine types of intelligence in the context of organizational psychology, enabling better personnel management and team building.',
  'Grasp the principles of ethical development in organizations, essential for creating a sustainable and positive work environment in HR management.',
  'Examine the personal and professional effects of job stress, and discover strategies within organizational psychology for mitigating its impact.',
];

export const coursePersonalityDisorders: Array<string> = [
  'Learn all diagnostic criteria for each personality disorder described in the DSM.',
  'Recognize personality traits & disorders in patients, coworkers, friends, & family.',
  'Explore the differences between cluster A, B, and C personality disorders.',
  'Test your knowledge with practice questions that simulate real psychology & psychiatric examinations.',
];

export const courseChild: Array<string> = [
  'Understand the main theories in Developmental Psychology.',
  "Understand children's intentions and behaviour at different ages of life.",
  "Learn why 'unconditional love' is important to growing baby.",
  "Learn about 'The Stages' of child's development.",
  'Know how language and linguistic skills develop in children; Learn about Cognitive Development (mind, subconscious mind, ego)',
];

export const courseEatingDisorders: Array<string> = [
  "Understand what 'eating disorders' such as 'bulimia' and 'anorexia nervosa' are.",
  'Know what causing eating disorders and how to treat them.',
  'Learn how Anxiety Disorders are linked to Eating Disorders.',
  'Learn the theory of Cognitive Behavioural Therapy and use its tools.',
  'Understand how to structure your CBT sessions.',
  'Learn how to start your career as a Cognitive Behavioural Therapist',
];

export const productArray: Array<ProductItem> = [
  {
    id: 1,
    image: product1,
    title:
      'Theory and Practice of Cognitive-Behavioral Therapy: a clinical course with pre-accreditation status ',
    info: 'Learn how Cognitive Behavioral Therapy (CBT) equips people to improve their emotional intelligence + mental well-being.',
    price: '1000$',
    program: courseCBT,
  },
  {
    id: 2,
    image: product2,
    title: 'Person-Centred Counselling Course (Certification Program)',
    info: 'Learn the essentials of person-centred psychology, counselling skills, communication + active listening to help others.',
    price: '200$',
    program: coursePersonCentred,
  },
  {
    id: 3,
    image: product3,
    title: 'PSYCHOLOGY: Stress & Anxiety Management (FULLY ACCREDITED)',
    info: 'CERTIFIED Course on Psychology of Anxiety-related Disorders: Generalised & Social',
    price: '250$',
    program: courseStressManagement,
  },
  {
    id: 4,
    image: product4,
    title: 'Learn Social Psychology',
    info: 'Understand How People Think, Feel, and Behave in this Complete Introduction to Social Psychology',
    price: '100$',
    program: courseSocial,
  },
  {
    id: 5,
    image: product5,
    title: 'CRIMINAL PSYCHOLOGY: Crime & Personality Disorders',
    info: 'FULLY ACCREDITED & CERTIFIED Course on Delinquent Behaviour & Crime Psychology',
    price: '450$',
    program: courseCriminal,
  },
  {
    id: 6,
    image: product6,
    title: 'Schema Therapy Practitioner Course',
    info: 'Schema Therapy Essentials: Rewire Childhood Patterns & Build Unshakable Emotional Freedom',
    price: '170$',
    program: courseSchema,
  },
  {
    id: 7,
    image: product7,
    title: 'Organizational Psychology and Human Resource Management',
    info: 'Certification in Organizational and Industrial Psychology From an HRM Professional. A Perfect Human Resource MGT Course',
    price: '70$',
    program: courseHumanManagement,
  },
  {
    id: 8,
    image: product8,
    title: 'Personality Disorders: Master the Psychology of All 10 Types',
    info: 'A comprehensive review of everything in the DSM on personality disorders. Narcissistic, Borderline, Schizoid, and more!',
    price: '300$',
    program: coursePersonalityDisorders,
  },
  {
    id: 9,
    image: product9,
    title: 'Child Psychology: Advanced Level - (FULLY ACCREDITED)',
    info: "CERTIFIED Course on Developmental Milestones & Child's Emotional Behaviour",
    price: '550$',
    program: courseChild,
  },
  {
    id: 10,
    image: product10,
    title: 'Cognitive Behavioural Therapy (CBT) for Eating Disorders',
    info: 'FULLY ACCREDITED & CERTIFIED Course on Diagnose & CBT Treatment of Anorexia, Bulimia, Binge Eating',
    price: '700$',
    program: courseEatingDisorders,
  },
];
